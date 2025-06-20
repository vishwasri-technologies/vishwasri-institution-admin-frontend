﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------
#pragma once

#include <winrt/windows.foundation.h>
#include <winrt/windows.ui.xaml.controls.h>
#include <winrt/windows.ui.xaml.data.h>
#include <winrt/windows.ui.xaml.interop.h>
#include <winrt/windows.ui.xaml.markup.h>

namespace winrt::Adminapp::implementation
{
    using DataContextChangedEventArgs = ::winrt::Windows::UI::Xaml::DataContextChangedEventArgs;
    using DependencyObject = ::winrt::Windows::UI::Xaml::DependencyObject;
    using DependencyProperty = ::winrt::Windows::UI::Xaml::DependencyProperty;
    using FrameworkElement = ::winrt::Windows::UI::Xaml::FrameworkElement;
    using IInspectable = ::winrt::Windows::Foundation::IInspectable;
    using INotifyCollectionChanged = ::winrt::Windows::UI::Xaml::Interop::INotifyCollectionChanged;
    using INotifyPropertyChanged = ::winrt::Windows::UI::Xaml::Data::INotifyPropertyChanged;
    using PropertyChangedEventArgs = ::winrt::Windows::UI::Xaml::Data::PropertyChangedEventArgs;
    using NotifyCollectionChangedEventArgs = ::winrt::Windows::UI::Xaml::Interop::NotifyCollectionChangedEventArgs;
    using ContainerContentChangingEventArgs = ::winrt::Windows::UI::Xaml::Controls::ContainerContentChangingEventArgs;

    struct XamlBindings;

    struct IXamlBindings
    {
        virtual ~IXamlBindings() {};
        virtual bool IsInitialized() = 0;
        virtual void Update() = 0;
        virtual bool SetDataRoot(IInspectable const& data) = 0;
        virtual void StopTracking() = 0;
        virtual void Connect(int connectionId, IInspectable const& target) = 0;
        virtual void Recycle() = 0;
        virtual void ProcessBindings(IInspectable const& item, int itemIndex, int phase, int32_t& nextPhase) = 0;
        virtual void SubscribeForDataContextChanged(FrameworkElement const& object, XamlBindings& handler) = 0;
        virtual void DisconnectUnloadedObject(int connectionId) = 0;
    };

    struct IXamlBindingTracking
    {
        virtual void PropertyChanged(IInspectable const& sender, PropertyChangedEventArgs const& e) = 0;
        virtual void CollectionChanged(IInspectable const& sender, NotifyCollectionChangedEventArgs const& e) = 0;
        virtual void DependencyPropertyChanged(DependencyObject const& sender, DependencyProperty const& prop) = 0;
        virtual void VectorChanged(IInspectable const& sender, ::winrt::Windows::Foundation::Collections::IVectorChangedEventArgs const& e) = 0;
        virtual void MapChanged(IInspectable const& sender, ::winrt::Windows::Foundation::Collections::IMapChangedEventArgs<::winrt::hstring> const& e) = 0;
    };

    struct XamlBindings : public winrt::implements<XamlBindings,
        ::winrt::Windows::UI::Xaml::IDataTemplateExtension,
        ::winrt::Windows::UI::Xaml::Markup::IComponentConnector,
        ::winrt::Windows::UI::Xaml::Markup::IDataTemplateComponent>
    {
        XamlBindings(std::unique_ptr<IXamlBindings>&& pBindings);

        // IComponentConnector
        void Connect(int connectionId, IInspectable const& target);

        // IDataTemplateComponent
        virtual void ProcessBindings(IInspectable const& item, int itemIndex, int phase, int32_t& nextPhase);
        virtual void Recycle();

        // IDataTemplateExtension
        bool ProcessBinding(uint32_t phase);
        int ProcessBindings(ContainerContentChangingEventArgs const& args);
        void ResetTemplate();

        void Initialize();
        void Update();
        void StopTracking();
        void Loading(FrameworkElement const& src, IInspectable const& data);
        void DataContextChanged(FrameworkElement const& sender, DataContextChangedEventArgs const& args);
        void SubscribeForDataContextChanged(FrameworkElement const& object);
        virtual void DisconnectUnloadedObject(int connectionId);

    private:
        std::unique_ptr<IXamlBindings> _pBindings;
    };

    template <typename TBindingsTracking>
    struct XamlBindingsBase : public IXamlBindings
    {
    protected:
        bool _isInitialized = false;
        std::shared_ptr<TBindingsTracking> _bindingsTracking;
        winrt::event_token _dataContextChangedToken {};
        static const int NOT_PHASED = (1 << 31);
        static const int DATA_CHANGED = (1 << 30);

    protected:
        XamlBindingsBase() = default;

        virtual ~XamlBindingsBase()
        {
            if (_bindingsTracking)
            {
                _bindingsTracking->SetListener(nullptr);
                _bindingsTracking.reset();
            }
        }

        virtual void ReleaseAllListeners()
        {
            // Overridden in the binding class as needed.
        }

    public:
        void InitializeTracking(IXamlBindingTracking* pBindingsTracking)
        {
            _bindingsTracking = std::make_shared<TBindingsTracking>();
            _bindingsTracking->SetListener(pBindingsTracking);
        }

        virtual void StopTracking() override
        {
            ReleaseAllListeners();
            this->_isInitialized = false;
        }

        virtual bool IsInitialized() override
        {
            return this->_isInitialized;
        }

        void SubscribeForDataContextChanged(FrameworkElement const& object, XamlBindings& handler) override
        {
            this->_dataContextChangedToken = object.DataContextChanged({ &handler, &XamlBindings::DataContextChanged });
        }

        virtual void Recycle() override
        {
            // Overridden in the binding class as needed.
        }

        virtual void ProcessBindings(IInspectable const&, int, int, int32_t& nextPhase) override
        {
            // Overridden in the binding class as needed.
            nextPhase = -1;
        }
    };

    struct XamlBindingTrackingBase
    {
        XamlBindingTrackingBase();
        void SetListener(IXamlBindingTracking* pBindings);
        
        // Event handlers
        void PropertyChanged(IInspectable const& sender, PropertyChangedEventArgs const& e);
        void CollectionChanged(IInspectable const& sender, NotifyCollectionChangedEventArgs const& e);
        void DependencyPropertyChanged(DependencyObject const& sender, DependencyProperty const& prop);
        void VectorChanged(IInspectable const& sender, ::winrt::Windows::Foundation::Collections::IVectorChangedEventArgs const& e);
        void MapChanged(IInspectable const& sender, ::winrt::Windows::Foundation::Collections::IMapChangedEventArgs<::winrt::hstring> const& e);

        // Listener update functions
        void UpdatePropertyChangedListener(INotifyPropertyChanged const& obj, INotifyPropertyChanged& cache, ::winrt::event_token& token);
        void UpdatePropertyChangedListener(INotifyPropertyChanged const& obj, ::winrt::weak_ref<::winrt::Windows::UI::Xaml::Data::INotifyPropertyChanged>& cache, ::winrt::event_token& token);
        void UpdateCollectionChangedListener(INotifyCollectionChanged const& obj, INotifyCollectionChanged& cache, ::winrt::event_token& token);
        void UpdateDependencyPropertyChangedListener(DependencyObject const& obj, DependencyProperty const& property, DependencyObject&  cache, int64_t& token);
        void UpdateDependencyPropertyChangedListener(DependencyObject const& obj, DependencyProperty const& property, ::winrt::weak_ref<::winrt::Windows::UI::Xaml::DependencyObject>& cache, int64_t& token);

    private:
        IXamlBindingTracking* _pBindingsTrackingWeakRef{nullptr};
    };

    template <typename T>
    struct ResolveHelper
    {
        static T Resolve(::winrt::weak_ref<T> const& wr)
        {
            return wr.get();
        }
    };

    template<>
    struct ResolveHelper<::winrt::hstring>
    {
        using ResolveType = ::winrt::Windows::Foundation::IReference<::winrt::hstring>;
        static ::winrt::hstring Resolve(::winrt::weak_ref<ResolveType> const& wr)
        {
            return wr.get().Value();
        }
    };

    template<typename T, typename TBindingsTracking> 
    struct ReferenceTypeXamlBindings : public XamlBindingsBase<TBindingsTracking>
    {
    protected:
        ReferenceTypeXamlBindings() {}

        virtual void Update_(T, int)
        {
            // Overridden in the binding class as needed.
        }

    public:
        T GetDataRoot()
        {
            return ResolveHelper<T>::Resolve(this->_dataRoot);
        }

        bool SetDataRoot(IInspectable const& data) override
        {
            if (data)
            {
                this->_dataRoot = ::winrt::unbox_value<T>(data);
                return true;
            }
            return false;
        }

        virtual void Update() override
        {
            this->Update_(this->GetDataRoot(), this->NOT_PHASED);
            this->_isInitialized = true;
        }

    private:
         ::winrt::weak_ref<T> _dataRoot;
    };

    template<typename T, typename TBindingsTracking> 
    struct ValueTypeXamlBindings : public XamlBindingsBase<TBindingsTracking>
    {
    protected:
        ValueTypeXamlBindings() {}

        virtual void Update_(T, int)
        {
            // Overridden in the binding class as needed.
        }

    public:
        T GetDataRoot()
        {
            return this->_dataRoot;
        }

        bool SetDataRoot(IInspectable const& data) override
        {
            if (data)
            {
                this->_dataRoot = ::winrt::unbox_value<T>(data);
                return true;
            }
            return false;
        }

        virtual void Update() override
        {
            this->Update_(this->GetDataRoot(), this->NOT_PHASED);
            this->_isInitialized = true;
        }

    private:
        T _dataRoot;
    };
}

