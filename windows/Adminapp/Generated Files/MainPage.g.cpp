// WARNING: Please don't edit this file. It was generated by C++/WinRT v2.0.230706.1

void* winrt_make_Adminapp_MainPage()
{
    return winrt::detach_abi(winrt::make<winrt::Adminapp::factory_implementation::MainPage>());
}
WINRT_EXPORT namespace winrt::Adminapp
{
    MainPage::MainPage() :
        MainPage(make<Adminapp::implementation::MainPage>())
    {
    }
}
