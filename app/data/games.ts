export interface Game {
  id: number;
  name: string;
  provider: string;
  category: 'slots' | 'sports' | 'esports' | 'casino' | 'togel' | 'poker' | 'elottery' | 'fishing' | 'arcade' | 'tangkas';
  rtp: number;
  img: string;
  status?: 'HOT' | 'NEW' | 'POPULAR';
}

export const GAMES: Game[] = [
  // SLOTS
  { id: 1, name: 'The Quest of Excalibur', provider: 'Slot Mania', category: 'slots', rtp: 98.5, img: 'https://cdn-proxy.globalcontentcloud.com/common/default/exclusive/slotmania.webp', status: 'HOT' },
  { id: 2, name: 'Sweet Bonanza Xmas', provider: 'Pragmaticplay', category: 'slots', rtp: 96.7, img: 'https://cdn.globalcontentcloud.com/game-images/pragmaticplay/732/thumbnail.webp' },
  { id: 3, name: '5 Lions Megaways', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017449/5_Lions_Megaways_gjsgka.webp', status: 'POPULAR' },
  { id: 4, name: 'Sugar Rush 1000', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017448/Sugar_Rush_1000_pjjome.webp' },
  { id: 5, name: 'Pyramid Bonanza', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017447/Pyramid_Bonanza_of2mfl.webp' },
  { id: 6, name: 'Mahjong Wins', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017446/Mahjong_Wins_wzw0a6.webp' },
  { id: 7, name: 'Gates of Gatot Kaca 1000', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017443/Gates_of_Gatot_Kaca_1000_oo0id3.webp' },
  { id: 8, name: 'Bonanza Gold', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017443/Bonanza_Gold_infx9f.webp' },
  { id: 9, name: 'Mahjong Wins 3', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017442/Mahjong_Wins_3_ok6oyj.webp' },
  { id: 10, name: 'Sweet Bonanza Dice', provider: 'Pragmaticplay', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777017440/Sweet_Bonanza_Dice_clgxch.webp' },
  { id: 11, name: 'Gemstones Gold', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018296/Gemstones_Gold_fhgagc.webp' },
  { id: 12, name: 'Mythical Guardians', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018290/Mythical_Guardians_itjcho.webp' },
  { id: 13, name: 'Wild Bounty Showdown', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018291/Wild_Bounty_Showdown_p6amfm.webp' },
  { id: 14, name: 'Wild Bandito', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018291/Wild_Bandito_rsnh7f.webp' },
  { id: 15, name: 'Midas Fortune', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018296/Midas_Fortune_yd9yeq.webp' },
  { id: 16, name: 'Wild Apel', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018297/Pinata_Wins_kfwccv.webp' },
  { id: 17, name: 'Pinata Wins', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018299/Wild_Ape_gfouds.webp' },
  { id: 18, name: 'Lucky Piggy', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018300/Lucky_Piggy_oshy6a.webp' },
  { id: 19, name: 'Lucky Neko', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018303/Lucky_Neko_jj4dur.webp' },
  { id: 20, name: 'Mahjong Ways 2', provider: 'PG Soft', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777018304/Mahjong_Ways_2_ovn4tf.webp' },
  { id: 21, name: 'Koi Gate', provider: 'Habanero', category: 'slots', rtp: 98.3, img: 'https://cdn.globalcontentcloud.com/game-images/habanero/52/thumbnail.webp' },
  { id: 22, name: 'Legendary Bumbum', provider: 'PP98%', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019482/Legendary_Bumbum_toe4im.webp' },
  { id: 23, name: 'Susu Koko Mania', provider: 'PP98%', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019481/Susu_Koko_Mania_sioep6.webp' },
  { id: 24, name: 'Slot Mania Phonix', provider: 'PP98%', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019480/Slot_Mania_Phonix_msos9b.webp' },
  { id: 25, name: 'Saiyan Mania', provider: 'PP98%', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019478/Saiyan_Mania_rvlktt.webp' },
  { id: 26, name: 'Mental', provider: 'Nonlimitcity', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019359/Mental_fhrr4l.webp' },
  { id: 27, name: 'Mental 2', provider: 'Nonlimitcity', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019358/Mental_2_ercnty.webp' },
  { id: 28, name: 'Blood Shadow', provider: 'Nonlimitcity', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019355/Blood_Shadow_mfc0n2.webp' },
  { id: 29, name: 'SeaMan', provider: 'Nonlimitcity', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019353/SeaMan_xaojcw.webp' },
  { id: 30, name: 'Royal 777', provider: 'IDNSlot', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019247/Royal_777_axw0ys.webp' },
  { id: 31, name: 'The Curse of Medusa', provider: 'IDNSlot', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019246/The_Curse_of_Medusa_jjtmq4.webp' },
  { id: 32, name: 'Power of Odin 1000', provider: 'IDNSlot', category: 'slots', rtp: 98.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1777019245/Power_of_Odin_1000_sxq6y4.webp' },
  
  
  // SPORTS
  { id: 101, name: 'SABA Sports', provider: 'SABA', category: 'sports', rtp: 92.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367192/imgi_242_202411051011395004_ttxahk.webp' },
  { id: 102, name: 'CMD368', provider: 'CMD', category: 'sports', rtp: 91.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367191/imgi_238_202411051010417486_iajw6w.webp' },
  { id: 104, name: 'SportGG', provider: 'SportGG', category: 'sports', rtp: 92.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775366587/imgi_15_sportgg_gyg11p.jpg' },
  { id: 105, name: 'BTI', provider: 'BTI', category: 'sports', rtp: 92.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775366587/imgi_20_bti_zg3uwj.jpg' },
  { id: 106, name: 'SBOBET', provider: 'SBOBET', category: 'sports', rtp: 91.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367192/imgi_247_202411051011144055_a9goup.webp' },
  { id: 107, name: 'SBO-LITE', provider: 'SBO-LITE', category: 'sports', rtp: 92.1, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367187/imgi_126_202411051008263086_rrj8nd.webp' },
  { id: 108, name: 'UBOBET', provider: 'UBOBET', category: 'sports', rtp: 92.4, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775367187/imgi_125_202411051011144055_t0zdsr.webp' },

  // ESPORTS
  { id: 201, name: 'Dota 2', provider: 'Saba Esports', category: 'esports', rtp: 94.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625065/imgi_19_e-sabaesports_bcbak4.jpg' },
  { id: 202, name: 'Mobile Legends', provider: 'TF Gaming', category: 'esports', rtp: 93.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625069/imgi_20_e-tfgaming_f2ycti.jpg' },
  { id: 203, name: 'CS:GO / CS2', provider: 'CMD Esports', category: 'esports', rtp: 93.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625072/imgi_21_e-ftesport_prgyu5.jpg' },
  { id: 204, name: 'nSoft Esports', provider: 'NSoft Esports', category: 'esports', rtp: 92.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625056/imgi_17_nsoft_ed3u7k.jpg' },
  { id: 205, name: 'SportGG', provider: 'SportGG Esports', category: 'esports', rtp: 93.2, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775366587/imgi_15_sportgg_gyg11p.jpg' },
  { id: 206, name: 'Valorant', provider: 'SBO Esports', category: 'esports', rtp: 93.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753625072/imgi_21_e-ftesport_prgyu5.jpg' },

    // CASINO
  { id: 301, name: 'Roulette', provider: 'Microgaming', category: 'casino', rtp: 97.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972389/imgi_13_202505221527225547_tiioxn.webp' },
  { id: 302, name: 'Blackjack', provider: 'Via Casino', category: 'casino', rtp: 99.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972388/imgi_12_202505221527078684_bd9qze.webp' },
  { id: 303, name: 'Baccarat', provider: 'Sexy Gaming', category: 'casino', rtp: 98.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972385/imgi_9_202505221526393907_gtb8kl.png' },
  { id: 304, name: 'Baccarat', provider: 'SA Gaming', category: 'casino', rtp: 80.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972381/imgi_6_202505221526071006_h3szka.webp' },
  { id: 305, name: 'Baccarat', provider: 'Pragmatic', category: 'casino', rtp: 78.73, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972380/imgi_5_202505221525536097_zezpy5.webp' },
  { id: 306, name: 'Baccarat', provider: 'Evolution', category: 'casino', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775972390/imgi_14_202409201614131973_agxlf6.webp' },
  

    // TOGEL
  { id: 401, name: 'Toto Macau 5D', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382617/imgi_109_202411051054017065_xvalqu.webp' },
  { id: 402, name: 'Taipei', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382609/imgi_106_20241105105401373_k5coak.webp' },
  { id: 403, name: 'Saigon 5D', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382567/imgi_91_202411051045273522_scqyyj.webp' },
  { id: 404, name: 'Cambodia 5D', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382569/imgi_83_202411070839276894_i3tcco.webp' },
  { id: 405, name: 'Singapore', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382545/imgi_73_202411060913555527_suzkje.webp' },
  { id: 406, name: 'Hongkong', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382533/imgi_70_202411060913024272_hdszhj.webp' },
  { id: 407, name: 'Sydney', provider: 'togel', category: 'togel', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382605/imgi_104_202411060913558122_x6dfdm.webp' },
  
    // POKER
  { id: 501, name: 'Texas Hold\'em', provider: 'poker', category: 'poker', rtp: 99.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376716/imgi_64_202410241323162226_ca73ro.png' },
  { id: 502, name: 'Omaha', provider: 'poker', category: 'poker', rtp: 98.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376723/imgi_72_202410241338029925_pqs2n9.png' },
  { id: 503, name: 'Ceme Keliling', provider: 'poker', category: 'poker', rtp: 97.3, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376715/imgi_68_202410241343255900_teeyyb.png' },
  { id: 504, name: 'Capsa Susun', provider: 'poker', category: 'poker', rtp: 96.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376722/imgi_71_202410241334141888_lnptdz.png' },
  { id: 505, name: 'Ceme', provider: 'poker', category: 'poker', rtp: 95.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376718/imgi_67_202410241343251938_mz7mdh.png' },
  { id: 506, name: 'Super Ten', provider: 'poker', category: 'poker', rtp: 95.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376717/imgi_66_202410241323168696_fll49b.png' },
  { id: 507, name: 'Dealer Capsa', provider: 'poker', category: 'poker', rtp: 94.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376725/imgi_73_202410241343254427_kpiyl8.png' },
  { id: 508, name: 'QQ Spirit', provider: 'poker', category: 'poker', rtp: 94.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376721/imgi_70_202410241334147068_ugoznr.png' },
  { id: 509, name: 'Bandar Ceme', provider: 'poker', category: 'poker', rtp: 93.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376726/imgi_75_202410241338029925_pqs2n9.png' },
  { id: 510, name: 'Domino Bet', provider: 'poker', category: 'poker', rtp: 93.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376727/imgi_74_202410241346444361_xbyhsl.png' },
  { id: 511, name: 'Joker Cash', provider: 'poker', category: 'poker', rtp: 92.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376728/imgi_75_202509161323265047_xco7vs.webp' },
  { id: 512, name: 'Joker Spin', provider: 'poker', category: 'poker', rtp: 92.0, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775376714/imgi_76_202504292247493952_fqd5ap.webp' },

  { id: 601, name: 'Elottery', provider: 'elottery', category: 'elottery', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1775382626/imgi_62_banner_lotto_uxa21t.webp' },
  { id: 701, name: 'Fishing', provider: 'fishing', category: 'fishing', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753624776/imgi_62_FishingLegend_dpdkra.webp' },
  { id: 801, name: 'Coin Toss', provider: 'Pragmaticplay', category: 'arcade', rtp: 97.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623890/imgi_63_thumbnail_v3hfhm.webp', status: 'HOT' },
  { id: 802, name: 'Virtual Racing', provider: 'Spadegaming', category: 'arcade', rtp: 96.2, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623887/imgi_62_thumbnail_yresqe.webp', status: 'NEW' },
  { id: 803, name: 'Climb to Victory', provider: 'CQ9', category: 'arcade', rtp: 95.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623884/imgi_61_thumbnail_q1sd6d.webp', status: 'POPULAR' },
  { id: 804, name: 'Bingo Blast', provider: 'Pragmaticplay', category: 'arcade', rtp: 94.5, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623875/imgi_58_thumbnail_piq94g.webp' },
  { id: 805, name: 'Keno Deluxe', provider: 'Spadegaming', category: 'arcade', rtp: 93.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623881/imgi_60_thumbnail_sbrei1.webp' },
  { id: 806, name: 'Sea of Fortune', provider: 'CQ9', category: 'arcade', rtp: 96.8, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623875/imgi_58_thumbnail_piq94g.webp', status: 'HOT' },
  { id: 807, name: 'Arcade Dice', provider: 'Pragmaticplay', category: 'arcade', rtp: 95.1, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623873/imgi_57_thumbnail_cghkoz.webp' },
  { id: 808, name: 'Dragon Pachinko', provider: 'CQ9', category: 'arcade', rtp: 94.9, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753623861/imgi_53_thumbnail_iqr9vv.webp', status: 'NEW' },
  { id: 901, name: 'Tangkas', provider: 'tangkas', category: 'tangkas', rtp: 68.7, img: 'https://res.cloudinary.com/dnjhs0kqu/image/upload/v1753624040/imgi_24_mm-banner_mmm4l5.webp' },
  

];

export const PROMOS = [
  {
    id: 1,
    title: "Welcome Bonus 100%",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1776154943/SLIDE_3_COINQQSLOT_ylv6pe.webp",
    description: "Dapatkan bonus sambutan 100% hingga Rp1.000.000 untuk pemain baru! Daftar sekarang dan gandakan peluang menang Anda di Coinqqslot!"
  },
    {
    id: 2,
    title: "Bonus Deposit Harian",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_22_promotion_29_production_43_ekwgqf.webp",
    description: "Nikmati bonus deposit harian hingga 20%! Setiap kali Anda melakukan deposit, dapatkan tambahan kredit untuk bermain lebih banyak dan menang lebih besar di Coinqqslot!"
    },
    {
    id: 3,
    title: "Cashback Mingguan 10%",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460899/imgi_23_promotion_24_production_43_chajnz.webp",
    description: "Dapatkan cashback mingguan 10% untuk semua kerugian Anda! Mainkan dengan tenang di Coinqqslot, karena kami memberikan perlindungan ekstra untuk setiap taruhan yang Anda pasang!"
  },
  { id: 4,
    title: "Referral Bonus 50%",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1776154943/SLIDE_4_COINQQSLOT_ql9h8c.webp",
    description: "Ajak teman Anda bergabung di Coinqqslot dan dapatkan bonus referral 50% dari deposit pertama mereka! Semakin banyak teman yang Anda ajak, semakin besar bonus yang bisa Anda kumpulkan!"
  },
  { id: 5,
    title: "Turnamen Slot Mingguan",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460903/imgi_30_promotion_11_production_43_isys8e.webp",
    description: "Ikuti turnamen slot mingguan kami dan menangkan hadiah besar! Bersaing dengan pemain lain untuk meraih posisi teratas di leaderboard dan dapatkan hadiah menarik setiap minggunya di Coinqqslot!"
  },
  { id: 6,
    title: "Bonus Deposit Pertama",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_17_promotion_10_production_43_zufykb.webp",
    description: "Dapatkan bonus deposit pertama 150% hingga Rp1.500.000! Mulai petualangan Anda di Coinqqslot dengan modal lebih besar dan peluang menang yang lebih tinggi!"
  },
  { id: 7,
    title: "Bonus Reload 5%",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_24_promotion_30_production_43_zcomzc.webp",
    description: "Nikmati bonus reload 50% setiap kali Anda melakukan deposit ulang! Pastikan untuk memanfaatkan penawaran ini dan tingkatkan saldo Anda untuk bermain lebih banyak di Coinqqslot!"
  },
  { id: 8,
    title: "Bonus Petir Merah",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1770460898/imgi_19_promotion_40_production_43_qempg4.webp",
    description: "Dapatkan bonus petir merah 10% untuk semua kerugian Anda! Mainkan dengan tenang di Coinqqslot, karena kami memberikan perlindungan ekstra untuk setiap taruhan yang Anda pasang!"
  },
  { id: 9,
    title: "Bonus Cashback VIP 20%",
    img: "https://res.cloudinary.com/dnjhs0kqu/image/upload/v1771059783/imgi_19_16991_695c4069a92dd6.23713114_rwcrtx.webp",
    description: "Dapatkan cashback VIP 20% untuk semua kerugian Anda! Mainkan dengan tenang di Coinqqslot, karena kami memberikan perlindungan ekstra untuk setiap taruhan yang Anda pasang, khusus untuk anggota VIP kami!"
  },
];