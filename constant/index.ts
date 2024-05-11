export const headerLinks = [
    {
      label: 'Beranda',
      route: '/',
    },
    {
      label: 'Buat Acara',
      route: '/events/create',
    },
    {
      label: 'Profile Saya',
      route: '/profile',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }