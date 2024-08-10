export const getBackgroundClasses = (pathname: string) => {
    switch (pathname) {
      case '/':
        return 'bg-home-mobile md:bg-home-tablet xl:bg-home-desktop'
      case '/destination':
        return 'bg-destination-mobile md:bg-destination-tablet xl:bg-destination-desktop'
      case '/crew':
        return 'bg-crew-mobile md:bg-crew-tablet xl:bg-crew-desktop'
      case '/technology':
        return 'bg-technology-mobile md:bg-technology-tablet xl:bg-technology-desktop'
      case '/register':
      case '/login':
        return 'bg-register-login-mobile md:bg-register-login-tablet xl:bg-register-login-desktop'
      default:
        if (pathname.startsWith('/user/')) {
          return 'bg-user-mobile md:bg-user-tablet xl:bg-user-desktop'
        }
        return 'bg-default-mobile md:bg-default-tablet xl:bg-default-desktop'
    }
  }