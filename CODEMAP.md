# Bản đồ code SFY

> Tự sinh bởi `python3 tools/codemap.py`. Chạy lại sau mỗi lần thêm hoặc đổi tên hàm.
> Sơ đồ tương tác: https://claude.ai/artifact/DRmCikiTMAyGu84MvDcQJf

Tổng: 348 khai báo cấp cao, 22 nhóm. File: index.html (khung, CSS, logic) + data/lessons.js, data/pron.js, data/vocab-work.js, data/ipa.js, i18n/strings.js, data/news.js, data/vocab-topics.js (dữ liệu, nạp trước).

## Nút trung tâm (sửa cẩn thận, nhiều chỗ phụ thuộc)
`store` (80), `esc` (59), `ui` (52), `saveStore` (21), `render` (20), `ICON_PLAY` (16), `PRON` (14), `VT_TOPICS` (13), `ymd` (13), `vtState` (13), `LESSONS` (12), `prog` (12)

## Dữ liệu bài học  `[data]`
- Ở: data/lessons.js, data/pron.js, data/vocab-work.js, index.html · Nếu tách: `đã tách: data/lessons.js, data/pron.js, data/vocab-work.js`
- Không gọi nhóm khác
- Khai báo: `LESSONS` data/lessons.js:4, `UNITS` data/lessons.js:1650, `LESSON_ORDER` data/lessons.js:1663, `snd` data/pron.js:4, `PRON_RAW` data/pron.js:5, `pItem` data/pron.js:252, `PRON_GROUPS` data/pron.js:259, `PRON` data/pron.js:259, `PSTEP_NAMES` data/pron.js:281, `VOCAB_RAW` data/vocab-work.js:4, `VOCAB_LV` data/vocab-work.js:48, `WORK_INDS` data/vocab-work.js:92, `WORK_EN` data/vocab-work.js:96, `WORK_ZH` data/vocab-work.js:170, `WORK_VOCAB` data/vocab-work.js:244, `VOCAB` :969, `vocabOf` :970, `lvTag` :977, `LANG_INFO` :984, `STEP_NAMES` :988

## Lưu trữ & tiện ích chung  `[core]`
- Ở: index.html · Nếu tách: `core/store.js, core/utils.js`
- Không gọi nhóm khác
- Khai báo: `STORE_KEY` :991, `loadStore` :992, `saveStore` :993, `store` :994, `applyTheme` :997, `ICON_PLAY` :2134, `ICON_STOP` :2135, `ICON_MOON` :2136, `ICON_SUN` :2137, `ICON_CHEV` :2138, `ICON_TOMATO` :2139, `ICON_MUSIC` :2140, `ICON_MIC` :2141

## Pomodoro & chuông  `[pomo]`
- Ở: index.html · Nếu tách: `features/pomodoro.js`
- Gọi sang: Lưu trữ & tiện ích chung (9), Tiến độ bài học (3), Nhạc lofi & âm thanh (1), Khung trang & điều hướng (1)
- Khai báo: `CHIMES` :1006, `Chime` :1011, `POMO_MODES` :1057, `POMO_PRESETS` :1059, `POMO_LIMITS` :1065, `pomoMin` :1066, `todayStr` :1067, `Pomo` :1072, `pomoTip` :3128, `pomoSndHtml` :3138, `pomoHtml` :3153

## Nhạc lofi & âm thanh  `[music]`
- Ở: index.html · Nếu tách: `features/music.js`
- Gọi sang: Lưu trữ & tiện ích chung (6), Tiến độ bài học (3), Khung trang & điều hướng (2)
- Khai báo: `LOFI_ARTIST` :1134, `ALBUMS` :1135, `TRACKS` :1141, `RATES` :1161, `SOUNDS` :1163, `Sound` :1173, `Player` :1242, `fmtTime` :1312, `Viz` :1314, `vizHtml` :3056, `musicHtml` :3085

## Giọng đọc & phiên âm IPA/pinyin  `[tts]`
- Ở: data/ipa.js, index.html · Nếu tách: `speech/tts.js, speech/phonetics.js (IPA đã tách: data/ipa.js)`
- Gọi sang: Lưu trữ & tiện ích chung (5), Tiến độ bài học (5), Bài hội thoại (2), Nhạc lofi & âm thanh (1), Dữ liệu bài học (1), Chấm điểm & phân tích phát âm (1), Khung trang & điều hướng (1)
- Khai báo: `IPA_SRC` data/ipa.js:4, `IS_COCCOC` :1337, `muteForMic` :1338, `prog` :1339, `pprog` :1341, `TTS` :1344, `IPA_DICT` :1383, `REC_BASE` :1388, `REC` :1390, `REC_SEQ` :1391, `recUrl` :1392, `PH_STOP` :1395, `PH_VOW` :1396, `PhonAudio` :1397, `PY_INIT` :1462, `PY_FIN` :1463, `pyBase` :1464, `pyIsSyl` :1465, `pySplitWord` :1470, `PY_CACHE` :1485, `pyAlign` :1486, `ipaOf` :1510, `phonOn` :1518, `phonText` :1520, `phonPick` :1542, `phonWord` :1558

## Ghi âm micro  `[rec]`
- Ở: index.html · Nếu tách: `speech/recorder.js`
- Gọi sang: Bài hội thoại (1), Dữ liệu bài học (1)
- Khai báo: `SR` :1569, `Rec` :1570

## Chấm điểm & phân tích phát âm  `[score]`
- Ở: index.html · Nếu tách: `speech/scoring.js, speech/analysis.js`
- Gọi sang: Giọng đọc & phiên âm IPA/pinyin (7), Dữ liệu bài học (6), Tiến độ bài học (3), Từ vựng theo chủ đề (1)
- Khai báo: `expandEn` :1719, `tokensEn` :1727, `isHan` :1728, `tokensZh` :1729, `stripTones` :1730, `lettersPy` :1731, `lcsInfo` :1732, `scoreOne` :1745, `evaluate` :1751, `PA_EN` :1788, `PA_EN_PAIR` :1828, `PA_ZH_INIT` :1849, `PA_ZH_FIN` :1861, `PA_TONE` :1869, `paLesson` :1873, `paAlign` :1875, `paG2P` :1889, `paPh` :1899, `paWordSim` :1900, `analyzeEn` :1907, `paPy` :1934, `PA_ZHMAP` :1942, `paZhMap` :1943, `analyzeZh` :1952, `paHtml` :1975, `missWords` :1984, `speakTip` :1992, `diffHtml` :2010, `grade` :2030, `gradeText` :2031

## Tiến độ bài học  `[prog]`
- Ở: index.html · Nếu tách: `core/progress.js`
- Gọi sang: Lưu trữ & tiện ích chung (9), Dữ liệu bài học (8), Giọng đọc & phiên âm IPA/pinyin (2)
- Khai báo: `ui` :2034, `lessonsOf` :2045, `groupOf` :2046, `curLesson` :2047, `curPron` :2048, `curLang` :2049, `pStepDone` :2053, `esc` :2061, `PASS` :2065, `lesReady` :2067, `pronReady` :2068, `lesDone` :2069, `pronDone` :2070, `LES_STEPS` :2074, `PRON_STEPS` :2074, `stepReady` :2075, `stepConf` :2080, `lesPct` :2081, `progBar` :2087, `confStepBtns` :2092, `finishBtn` :2098, `lesList` :2105, `pronList` :2106, `lesStarted` :2107, `pronStarted` :2108, `lesOpen` :2110, `pronOpen` :2111, `stepOpen` :2112, `pStepOpen` :2113, `findLes` :2114, `findPron` :2115, `toast` :2116, `lockStepBtns` :2122, `stepDone` :2125

## Đa ngôn ngữ giao diện  `[i18n]`
- Ở: i18n/strings.js, index.html · Nếu tách: `bảng dịch đã tách: i18n/strings.js; logic còn lại → core/i18n.js`
- Gọi sang: Khung trang & điều hướng (2), Lưu trữ & tiện ích chung (1)
- Khai báo: `I18N_DICT` i18n/strings.js:4, `I18N_RX` i18n/strings.js:413, `UI_LANGS` :2148, `I18N_SECS` :2154, `I18N` :2155

## Tra từ & sổ từ vựng  `[nb]`
- Ở: index.html · Nếu tách: `features/notebook.js, features/dict.js`
- Gọi sang: Lưu trữ & tiện ích chung (17), Tiến độ bài học (8), Dữ liệu bài học (4), Giọng đọc & phiên âm IPA/pinyin (3), Từ vựng theo chủ đề (3), Khung trang & điều hướng (3), Lịch sử học (2), Đa ngôn ngữ giao diện (1), Lịch & kế hoạch (1), Phát âm & khẩu hình (1)
- Khai báo: `Dict` :2203, `NB` :2274, `saveMenu` :2288, `nbSaveTo` :2297, `dictCard` :2302, `WordPop` :2322, `NBT` :2416, `nbState` :2424, `nbWords` :2425, `nbPron` :2429, `renderNotebook` :2430, `nbStart` :2492, `renderNbStudy` :2512, `nbLookup` :2544, `nbAct` :2555

## Đọc báo song ngữ  `[news]`
- Ở: data/news.js, index.html · Nếu tách: `features/news.js (bài báo đã tách: data/news.js)`
- Gọi sang: Lưu trữ & tiện ích chung (6), Tiến độ bài học (4), Lịch & kế hoạch (2), Tra từ & sổ từ vựng (2), Phát âm & khẩu hình (1), Giọng đọc & phiên âm IPA/pinyin (1), Lịch sử học (1), Khung trang & điều hướng (1)
- Khai báo: `NEWS` data/news.js:4, `newsState` :2641, `newsUi` :2642, `newsAll` :2643, `newsTokens` :2644, `renderNews` :2652, `renderNewsArticle` :2677, `renderNewsPaste` :2699, `newsAct` :2711

## Lịch sử học  `[hist]`
- Ở: index.html · Nếu tách: `features/history.js`
- Gọi sang: Lịch & kế hoạch (5), Lưu trữ & tiện ích chung (4), Khung trang & điều hướng (4), Tiến độ bài học (3)
- Khai báo: `HIST_KINDS` :2748, `Hist` :2753, `histLabelDay` :2764, `renderHistory` :2768, `histAct` :2798

## Gợi ý lộ trình  `[route]`
- Ở: index.html · Nếu tách: `features/routes.js`
- Gọi sang: Tiến độ bài học (5), Dữ liệu bài học (4), Lưu trữ & tiện ích chung (3), Đọc báo song ngữ (2), Từ vựng theo chủ đề (2), Tra từ & sổ từ vựng (1), Khung trang & điều hướng (1)
- Khai báo: `ROUTES` :2819, `routeVal` :2852, `routeUnitLessons` :2853, `routeNews` :2858, `routeStep` :2860, `routeHtml` :2870, `routeAct` :2892

## Khung trang & điều hướng  `[shell]`
- Ở: index.html · Nếu tách: `app/render.js, app/router.js, app/header.js`
- Gọi sang: Tiến độ bài học (20), Lưu trữ & tiện ích chung (8), Trang chủ (7), Lịch & kế hoạch (5), Dữ liệu bài học (4), Đọc báo song ngữ (3), Từ vựng theo chủ đề (3), Lịch sử học (3), Nhạc lofi & âm thanh (3), Thành tựu & hồ sơ (3), Phát âm & khẩu hình (2), Đa ngôn ngữ giao diện (2), Giọng đọc & phiên âm IPA/pinyin (1), Bài hội thoại (1), Pomodoro & chuông (1), Tìm kiếm (1)
- Khai báo: `LOGO_INTRO` :2908, `menuClear` :2911, `placeBack` :2922, `gateFix` :2946, `histTrack` :2952, `render` :2965, `SECTIONS` :3003, `secName` :3017, `header` :3018, `LANGS` :3035, `ICON_SEARCH` :3042, `searchChip` :3043, `homePlanChip` :3050, `REPEAT_NAMES` :3061, `ICON_GEAR` :3063, `SETG_ITEMS` :3064, `setgHtml` :3071, `fitMenu` :3187, `sidebar` :3189, `Route` :5158

## Trang chủ  `[home]`
- Ở: index.html · Nếu tách: `pages/home.js`
- Gọi sang: Tiến độ bài học (12), Khung trang & điều hướng (6), Dữ liệu bài học (5), Lưu trữ & tiện ích chung (3), Lịch & kế hoạch (3), Phát âm & khẩu hình (2), Hiệu ứng lá rơi (1), Gợi ý lộ trình (1)
- Khai báo: `renderComing` :3197, `renderHome` :3203, `WORK_SOON` :3228, `renderWorkHome` :3229, `HOME_QUOTES` :4635, `greeting` :4644, `renderLanding` :4645, `SECTION_DESC` :4680, `_I` :4681, `SECTION_ICONS` :4682

## Phát âm & khẩu hình  `[pron]`
- Ở: index.html · Nếu tách: `pages/pron.js, pages/mouth-anim.js`
- Gọi sang: Tiến độ bài học (22), Lưu trữ & tiện ích chung (15), Giọng đọc & phiên âm IPA/pinyin (12), Dữ liệu bài học (6), Khung trang & điều hướng (4), Bài hội thoại (2), Chấm điểm & phân tích phát âm (2), Ghi âm micro (1)
- Khai báo: `voiceWarn` :3252, `renderPronHome` :3258, `renderPron` :3285, `exBtn` :3311, `renderPronListen` :3318, `MV_REST` :3333, `MV_SHAPES` :3334, `mvSeq` :3399, `mvTimeline` :3428, `mvEase` :3434, `mvAt` :3435, `lnTongue` :3448, `lnFocus` :3450, `mvSideLine` :3460, `lnMark` :3503, `mvSideLens` :3509, `mvLipsReal` :3517, `mvLipsInk` :3561, `MV_TONES` :3592, `mvTone` :3593, `MV` :3600, `mvKeyFrame` :3601, `mvLesson` :3602, `mvRenderCard` :3603, `mvDraw` :3622, `mvPlay` :3634, `renderPronTips` :3655, `shuffle` :3665, `pqStart` :3666, `renderPronQuiz` :3671, `renderPronSpeak` :3711, `micStatus` :3731

## Bài hội thoại  `[les]`
- Ở: index.html · Nếu tách: `pages/lesson.js`
- Gọi sang: Tiến độ bài học (36), Lưu trữ & tiện ích chung (20), Giọng đọc & phiên âm IPA/pinyin (19), Chấm điểm & phân tích phát âm (6), Khung trang & điều hướng (6), Dữ liệu bài học (4), Phát âm & khẩu hình (3), Ghi âm micro (1), Từ vựng theo chủ đề (1)
- Khai báo: `renderLesson` :3737, `lineHtml` :3768, `renderListen` :3780, `speakBlock` :3789, `renderPhrases` :3817, `renderRole` :3836, `renderNotes` :3886, `renderVocab` :3892, `playVocabFrom` :3902, `renderMicStates` :4295, `voicePicker` :4296, `itemByKey` :4305, `sayKey` :4330, `playAllFrom` :4343, `handleResult` :4351, `rpAdvance` :4382

## Từ vựng theo chủ đề  `[vt]`
- Ở: data/vocab-topics.js, index.html · Nếu tách: `pages/vocab-topics.js (dữ liệu đã tách: data/vocab-topics.js)`
- Gọi sang: Lưu trữ & tiện ích chung (11), Tiến độ bài học (11), Phát âm & khẩu hình (7), Dữ liệu bài học (4), Tra từ & sổ từ vựng (2), Giọng đọc & phiên âm IPA/pinyin (2), Bài hội thoại (2), Khung trang & điều hướng (2), Lịch sử học (1)
- Khai báo: `VT_RAW` data/vocab-topics.js:4, `VT_TOPICS` :3914, `VT_PART` :3929, `vtState` :3930, `vtToday` :3936, `vtWeek` :3937, `vtKey` :3938, `vtStreak` :3939, `vtLevel` :3945, `vtAddXP` :3946, `vtLearned` :3950, `vtTopicDone` :3951, `VT_BADGES` :3952, `vtBadges` :3962, `vtItems` :3963, `vtStats` :3964, `renderVT` :3973, `renderVTTopic` :3994, `vtOrder` :4043, `vtQuizMake` :4044, `renderVTRank` :4053, `BOARD_CFG` :4073, `Board` :4074, `vtAct` :4103, `renderVocabSection` :4285

## Thành tựu & hồ sơ  `[ach]`
- Ở: index.html · Nếu tách: `pages/profile.js`
- Gọi sang: Tiến độ bài học (10), Từ vựng theo chủ đề (7), Lưu trữ & tiện ích chung (6), Dữ liệu bài học (2), Khung trang & điều hướng (2), Trang chủ (2), Lịch sử học (1), Pomodoro & chuông (1)
- Khai báo: `ACH_SECS` :4134, `ACH_LANG` :4144, `ACH_LIST` :4145, `achProg` :4162, `achState` :4163, `ACH` :4164, `achCheck` :4166, `achShowNext` :4180, `achSmallIcon` :4206, `achBigIcon` :4217, `profInitial` :4243, `renderProfile` :4244, `renderAchieve` :4264

## Tìm kiếm  `[search]`
- Ở: index.html · Nếu tách: `features/search.js`
- Gọi sang: Dữ liệu bài học (4), Khung trang & điều hướng (2), Lưu trữ & tiện ích chung (1), Tiến độ bài học (1)
- Khai báo: `normVi` :4591, `SEARCH_IDX` :4592, `buildSearch` :4593, `searchLessons` :4613, `searchHtml` :4626

## Lịch & kế hoạch  `[plan]`
- Ở: index.html · Nếu tách: `pages/plan.js, ui/picker.js`
- Gọi sang: Tiến độ bài học (10), Lưu trữ & tiện ích chung (4), Khung trang & điều hướng (3), Hiệu ứng lá rơi (2), Pomodoro & chuông (1)
- Khai báo: `PLAN_COLORS` :4698, `WD` :4699, `WD_S` :4700, `pad2` :4702, `ymd` :4703, `hhmm` :4704, `pd` :4705, `addDays` :4706, `wdIdx` :4707, `planItems` :4708, `planColor` :4709, `niceDate` :4710, `dayItems` :4711, `chip` :4715, `WEEK_HH` :4719, `renderPlan` :4720, `PRI` :4774, `priOf` :4775, `taskColor` :4776, `taskBadge` :4777, `dayTasks` :4782, `planDayPanel` :4790, `planForm` :4826, `planReadForm` :4844, `Plan` :4850, `pd2m` :4937, `m2hh` :4938, `showToast` :4940, `DRAG_ID` :4945, `PK_CAL` :4953, `PK_CLOCK` :4954, `pkLabel` :4955, `pickerHtml` :4959, `Picker` :4963, `enhanceSelects` :5087

## Hiệu ứng lá rơi  `[leaf]`
- Ở: index.html · Nếu tách: `ui/leaves.js`
- Gọi sang: Lưu trữ & tiện ích chung (1)
- Khai báo: `LEAF_SVG` :5100, `LEAF_COLORS` :5101, `Leaves` :5102, `leafBurst` :5134
