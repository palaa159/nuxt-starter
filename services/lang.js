const lang = {
  home: {
    th: 'หน้าแรก',
    en: 'home'
  },
  info: {
    th: 'ข้อมูล',
    en: 'info'
  },
  program: {
    th: 'โปรแกรม',
    en: 'programme'
  },
  venues: {
    th: 'สถานที่',
    en: 'venues'
  },
  support: {
    th: 'การสนับสนุน',
    en: 'support'
  },
  news: {
    th: 'ข่าวสาร',
    en: 'news'
  },
  guide: {
    th: 'ดีไซน์วีคแนะนำ',
    en: 'guide'
  },
  about: {
    th: 'เกี่ยวกับ',
    en: 'about'
  },
  allVenues: {
    th: 'สถานที่ทั้งหมด',
    en: 'all'
  },
  all: {
    th: 'ทั้งหมด',
    en: 'all '
  },
  supporters: {
    th: 'ผู้สนับสนุน',
    en: 'supporters'
  },
  benefits: {
    th: 'สิทธิประโยชน์',
    en: 'Benefits'
  },
  allPrograms: {
    th: 'ทั้งหมด',
    en: 'All'
  },
  hilights: {
    th: 'ไฮไลท์',
    en: 'Highlights'
  },
  seeAll: {
    th: 'ดูทั้งหมด',
    en: 'see all'
  },
  seeMore: {
    th: 'ดูเพิ่มเติม',
    en: 'see more'
  },
  happening: {
    th: 'เกิดขึ้นวันนี้!',
    en: 'Happening!'
  },
  latestNews: {
    th: 'ข่าวล่าสุด',
    en: 'latest news'
  },
  seeTodayProgram: {
    th: 'ดูโปรแกรมวันนี้',
    en: 'see today\'s programmes'
  },
  programmeFilter: {
    th: 'โปรแกรม',
    en: 'Programmes'
  },
  venueFilter: {
    th: 'สถานที่',
    en: 'Venues'
  },
  applyFilter: {
    th: 'เลือก',
    en: 'Apply'
  },
  aboutTitle: {
    th: 'เทศกาลงานออกแบบเชียงใหม่',
    en: 'Chiang Mai Design Week'
  },
  attending: {
    th: 'การเข้าร่วม',
    en: 'Attending'
  },
  freeAdmission: {
    th: 'ชมฟรี',
    en: 'Free Admission'
  },
  schedule: {
    th: 'วันและเวลา',
    en: 'Schedule'
  },
  viewOnGmap: {
    th: 'ดูเส้นทาง',
    en: 'View on Google Maps'
  },
  relatedProgrammes: {
    th: 'โปรแกรมน่าสนใจ',
    en: 'Related Programmes'
  },
  addtoFavorites: {
    th: 'เพิ่มสิ่งที่ชื่นชอบ',
    en: 'Add to Favorites'
  },
  removefromFavorites: {
    th: 'ลบสิ่งที่ชื่นชอบ',
    en: 'Remove from Favorites'
  },
  designer: {
    th: 'ผู้ออกแบบ',
    en: 'Designer'
  },
  speakers: {
    th: 'วิทยากร',
    en: 'Speakers'
  },
  contact: {
    th: 'ติดต่อ',
    en: 'Contact'
  },
  programmeFound: {
    th: 'กิจกรรม',
    en: 'Programmes Found'
  },
  contactUS: {
    th: 'ติดต่อเรา',
    en: 'Contact Us'
  },
  subscribe: {
    th: 'รับข่าวสาร',
    en: 'Subscribe'
  },
  participation: {
    th: 'การเข้าร่วม',
    en: 'Participation'
  },
  booking: {
    th: 'กดสำรองที่นั่ง',
    en: 'Click to Booking'
  },
  price: {
    th: 'ราคา',
    en: 'Price'
  },
  baht: {
    th: 'บาท',
    en: 'Baht'
  }
}

function mod(lg, lc) {
  let rt = {}
  for (let o in lg) {
    rt[o] = lg[o][lc]
  }
  return rt
}

module.exports = {
  th: mod(lang, 'th'),
  en: mod(lang, 'en')
}
