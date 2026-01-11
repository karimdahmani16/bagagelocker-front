import Service from "@/core/Service";
const state = {
    selectedLanguage: null,
    our_consign: null,
    with_lightness: null,
    how_it_works: null,
    reserve: null,
    online_reservation: null,
    access_codes: null,
    reservation_confirmed: null,
    receipt_instruction: null,
    store_your_luggage: null,
    place_your_belongings: null,
    enjoy: null,
    explore_porto_hands_free: null,
    schedules: null,
    free_access: null,
    total_autonomy: null,
    monday_to_sunday: null,
    open_on: null,
    mandatory_departure: null,
    storage_assumptions: null,
    box_size: null,
    type_of_baggage: null,
    luggage: null,
    carry_on_luggage: null,
    backpack: null,
    euros_per_box: null,
    the_box_can_hold: null,
    missing_baggage: null,
    with_us_feel_safe: null,
    insured_by: null,
    with_us_your_luggage: null,
    permises_under_video: null,
    days_a_week: null,
    who_are_we: null,
    is_an_automated: null,
    this_way: null,
    a_reservation_with_us: null,
    security: null,
    our_automated_is_equipped: null,
    this_ensures: null,
    accessibility_days: null,
    our_automated_is_avail: null,
    convenience: null,
    by_reserving_a_box: null,
    place_to_store: null,
    this_allows: null,
    considerable_saving: null,
    how_can_i_check_avail: null,
    to_check_avail: null,
    how_can_i_book: null,
    reserving_a_locker: null,
    what_are_pay_meth: null,
    we_accept_apy_meth: null,
    book_in_advance: null,
    advance_booking: null,
    reservation_duration: null,
    price_based_on: null,
    opening_days: null,
    open_365_days: null,
    receive_codes: null,
    receive_code_after_resa: null,
    did_not_receive_code: null,
    did_not_receive_code_reply: null,
    still_cannot_find_email: null,
    lose_my_code: null,
    lose_my_code_reply: null,
    refund_resa: null,
    refund_resa_reply: null,
    luggage_insured: null,
    luggage_insured_reply: null,
    when_box_access: null,
    when_box_access_reply: null,
    checkout_time: null,
    checkout_time_reply: null,
    keep_inside_box: null,
    keep_inside_box_reply: null,
    prohibited_inside_box: null,
    prohibited_inside_box_reply: null,
    prohibited_inside_box_reply_1: null,
    another_person_pick: null,
    another_person_pick_reply: null,
    stay_on_premises: null,
    stay_on_premises_reply: null,
    stay_on_premises_reply_1: null,
    take_photos: null,
    take_photos_reply: null,
    please_check_dimensions: null,
    change_language: null,
    english: null,
    french: null,
    portuguese: null,
    spanish: null,
};

const getters = {
    selectedLanguage: state => state.selectedLanguage,
    our_consign: state => state.our_consign,
    with_lightness: state => state.with_lightness,
    how_it_works: state => state.how_it_works,
    reserve: state => state.reserve,
    online_reservation: state => state.online_reservation,
    access_codes: state => state.access_codes,
    reservation_confirmed: state => state.reservation_confirmed,
    receipt_instruction: state => state.receipt_instruction,
    store_your_luggage: state => state.store_your_luggage,
    place_your_belongings: state => state.place_your_belongings,
    enjoy: state => state.enjoy,
    explore_porto_hands_free: state => state.explore_porto_hands_free,
    schedules: state => state.schedules,
    free_access: state => state.free_access,
    total_autonomy: state => state.total_autonomy,
    monday_to_sunday: state => state.monday_to_sunday,
    open_on: state => state.open_on,
    mandatory_departure: state => state.mandatory_departure,
    storage_assumptions: state => state.storage_assumptions,
    box_size: state => state.box_size,
    type_of_baggage: state => state.type_of_baggage,
    luggage: state => state.luggage,
    carry_on_luggage: state => state.carry_on_luggage,
    backpack: state => state.backpack,
    euros_per_box: state => state.euros_per_box,
    the_box_can_hold: state => state.the_box_can_hold,
    missing_baggage: state => state.missing_baggage,
    with_us_feel_safe: state => state.with_us_feel_safe,
    insured_by: state => state.insured_by,
    with_us_your_luggage: state => state.with_us_your_luggage,
    permises_under_video: state => state.permises_under_video,
    days_a_week: state => state.days_a_week,
    who_are_we: state => state.who_are_we,
    is_an_automated: state => state.is_an_automated,
    this_way: state => state.this_way,
    a_reservation_with_us: state => state.a_reservation_with_us,
    security: state => state.security,
    our_automated_is_equipped: state => state.our_automated_is_equipped,
    this_ensures: state => state.this_ensures,
    accessibility_days: state => state.accessibility_days,
    our_automated_is_avail: state => state.our_automated_is_avail,
    convenience: state => state.convenience,
    by_reserving_a_box: state => state.by_reserving_a_box,
    place_to_store: state => state.place_to_store,
    this_allows: state => state.this_allows,
    considerable_saving: state => state.considerable_saving,
    how_can_i_check_avail: state => state.how_can_i_check_avail,
    to_check_avail: state => state.to_check_avail,
    how_can_i_book: state => state.how_can_i_book,
    reserving_a_locker: state => state.reserving_a_locker,
    what_are_pay_meth: state => state.what_are_pay_meth,
    we_accept_apy_meth: state => state.we_accept_apy_meth,
    book_in_advance: state => state.book_in_advance,
    advance_booking: state => state.advance_booking,
    reservation_duration: state => state.reservation_duration,
    price_based_on: state => state.price_based_on,
    opening_days: state => state.opening_days,
    open_365_days: state => state.open_365_days,
    receive_codes: state => state.receive_codes,
    receive_code_after_resa: state => state.receive_code_after_resa,
    did_not_receive_code: state => state.did_not_receive_code,
    did_not_receive_code_reply: state => state.did_not_receive_code_reply,
    still_cannot_find_email: state => state.still_cannot_find_email,
    lose_my_code: state => state.lose_my_code,
    lose_my_code_reply: state => state.lose_my_code_reply,
    refund_resa: state => state.refund_resa,
    refund_resa_reply: state => state.refund_resa_reply,
    luggage_insured: state => state.luggage_insured,
    luggage_insured_reply: state => state.luggage_insured_reply,
    when_box_access: state => state.when_box_access,
    when_box_access_reply: state => state.when_box_access_reply,
    checkout_time: state => state.checkout_time,
    checkout_time_reply: state => state.checkout_time_reply,
    keep_inside_box: state => state.keep_inside_box,
    keep_inside_box_reply: state => state.keep_inside_box_reply,
    prohibited_inside_box: state => state.prohibited_inside_box,
    prohibited_inside_box_reply: state => state.prohibited_inside_box_reply,
    prohibited_inside_box_reply_1: state => state.prohibited_inside_box_reply_1,
    another_person_pick: state => state.another_person_pick,
    another_person_pick_reply: state => state.another_person_pick_reply,
    stay_on_premises: state => state.stay_on_premises,
    stay_on_premises_reply: state => state.stay_on_premises_reply,
    stay_on_premises_reply_1: state => state.stay_on_premises_reply_1,
    take_photos: state => state.take_photos,
    take_photos_reply: state => state.take_photos_reply,
    please_check_dimensions: state => state.please_check_dimensions,
    change_language: state => state.change_language,
    english: state => state.english,
    french: state => state.french,
    portuguese: state => state.portuguese,
    spanish: state => state.spanish
};

const actions = {
    async switchLanguage({ commit }, language) {
        Service.switchLanguage(language).then((response) => {
            if (response.data) {
                commit("setSelectedLanguage", language);
                response.data.forEach(element => {
                    if(element.label=="OUR_CONSIGN") {
                        console.log(element.value);
                        commit("setOurConsign", element.value);
                    }
                    if(element.label=="WITH_LIGHTNESS") {
                        commit("setWithLightness", element.value);
                    }
                    if(element.label=="HOW_IT_WORKS") {
                        commit("setHowItWorks", element.value);
                    }
                    if(element.label=="RESERVE") {
                        commit("setReserve", element.value);
                    }
                    if(element.label=="ONLINE_RESERVATION") {
                        commit("setOnlineReservation", element.value);
                    }
                    if(element.label=="ACCESS_CODES") {
                        commit("setAccessCodes", element.value);
                    }
                    if(element.label=="RESERVATION_CONFIRMED") {
                        commit("setReservationConfirmed", element.value);
                    }
                    if(element.label=="RECEIPT_INSTRUCTION") {
                        commit("setReceiptInstruction", element.value);
                    }
                    if(element.label=="STORE_YOUR_LUGGAGE") {
                        commit("setStoreYourLuggage", element.value);
                    }
                    if(element.label=="PLACE_YOUR_BELONGINGS") {
                        commit("setPlaceYourBelongings", element.value);
                    }
                    if(element.label=="ENJOY") {
                        commit("setEnjoy", element.value);
                    }
                    if(element.label=="EXPLORE_PORTO_HANDS_FREE") {
                        commit("setExplorePortoHandsFree", element.value);
                    }
                    if(element.label=="SCHEDULES") {
                        commit("setSchedules", element.value);
                    }
                    if(element.label=="FREE_ACCESS") {
                        commit("setFreeAccess", element.value);
                    }
                    if(element.label=="TOTAL_AUTONOMY") {
                        commit("setTotalAutonomy", element.value);
                    }
                    if(element.label=="MONDAY_TO_SUNDAY") {
                        commit("setMondayToSunday", element.value);
                    }
                    if(element.label=="OPEN_ON") {
                        commit("setOpenOn", element.value);
                    }
                    if(element.label=="MANDATORY_DEPARTURE") {
                        commit("setMandatoryDeparture", element.value);
                    }
                    if(element.label=="STORAGE_ASSUMPTIONS") {
                        commit("setStorageAssumptions", element.value);
                    }
                    if(element.label=="BOX_SIZE") {
                        commit("setBoxSize", element.value);
                    }
                    if(element.label=="TYPE_OF_BAGGAGE") {
                        commit("setTypeOfBaggage", element.value);
                    }
                    if(element.label=="LUGGAGE") {
                        commit("setLuggage", element.value);
                    }
                    if(element.label=="CARRY_ON_LUGGAGE") {
                        commit("setCarryOnLuggage", element.value);
                    }
                    if(element.label=="BACKPACK") {
                        commit("setBackpack", element.value);
                    }
                    if(element.label=="EUROS_PER_BOX") {
                        commit("setEurosPerBox", element.value);
                    }
                    if(element.label=="THE_BOX_CAN_HOLD") {
                        commit("setTheBoxCanHold", element.value);
                    }
                    if(element.label=="MISSING_BAGGAGE") {
                        commit("setMissingBaggage", element.value);
                    }
                    if(element.label=="WITH_US_FEEL_SAFE") {
                        commit("setWithUsFeelSafe", element.value);
                    }
                    if(element.label=="INSURED_BY") {
                        commit("setInsuredBy", element.value);
                    }
                    if(element.label=="WITH_US_YOUR_LUGGAGE") {
                        commit("setWithUsYourLuggage", element.value);
                    }
                    if(element.label=="PERMISES_UNDER_VIDEO") {
                        commit("setPermisesUnderVideo", element.value);
                    }
                    if(element.label=="DAYS_A_WEEK") {
                        commit("setDaysAWeek", element.value);
                    }
                    if(element.label=="WHO_ARE_WE") {
                        commit("setWhoAreWe", element.value);
                    }
                    if(element.label=="IS_AN_AUTOMATED") {
                        commit("setIsAnAutomated", element.value);
                    }
                    if(element.label=="THIS_WAY") {
                        commit("setThisWay", element.value);
                    }
                    if(element.label=="A_RESERVATION_WITH_US") {
                        commit("setAReservationWithUs", element.value);
                    }
                    if(element.label=="SECURITY") {
                        commit("setSecurity", element.value);
                    }
                    if(element.label=="OUR_AUTOMATED_IS_EQUIPPED") {
                        commit("setOurAutomatedIsEquipped", element.value);
                    }
                    if(element.label=="THIS_ENSURES") {
                        commit("setThisEnsures", element.value);
                    }
                    if(element.label=="ACCESSIBILITY_DAYS") {
                        commit("setAccessibilityDays", element.value);
                    }
                    if(element.label=="OUR_AUTOMATED_IS_AVAIL") {
                        commit("setOurAutomatedIsAvail", element.value);
                    }
                    if(element.label=="CONVENIENCE") {
                        commit("setConvenience", element.value);
                    }
                    if(element.label=="BY_RESERVING_A_BOX") {
                        commit("setByReservingABox", element.value);
                    }
                    if(element.label=="PLACE_TO_STORE") {
                        commit("setPlaceToStore", element.value);
                    }
                    if(element.label=="THIS_ALLOWS") {
                        commit("setThisAllows", element.value);
                    }
                    if(element.label=="CONSIDERABLE_SAVING") {
                        commit("setConsiderableSaving", element.value);
                    }
                    if(element.label=="HOW_CAN_I_CHECK_AVAIL") {
                        commit("setHowCanICheckAvail", element.value);
                    }
                    if(element.label=="TO_CHECK_AVAIL") {
                        commit("setToCheckAvail", element.value);
                    }
                    if(element.label=="HOW_CAN_I_BOOK") {
                        commit("setHowCanIBook", element.value);
                    }
                    if(element.label=="RESERVING_A_LOCKER") {
                        commit("setReservingALocker", element.value);
                    }
                    if(element.label=="WHAT_ARE_PAY_METH") {
                        commit("setWhatArePayMeth", element.value);
                    }
                    if(element.label=="WE_ACCEPT_APY_METH") {
                        commit("setWeAcceptApyMeth", element.value);
                    }
                    if(element.label=="BOOK_IN_ADVANCE") {
                        commit("setBookInAdvance", element.value);
                    }
                    if(element.label=="ADVANCE_BOOKING") {
                        commit("setAdvanceBooking", element.value);
                    }
                    if(element.label=="RESERVATION_DURATION") {
                        commit("setReservationDuration", element.value);
                    }
                    if(element.label=="PRICE_BASED_ON") {
                        commit("setPriceBasedOn", element.value);
                    }
                    if(element.label=="OPENING_DAYS") {
                        commit("setOpeningDays", element.value);
                    }
                    if(element.label=="OPEN_365_DAYS") {
                        commit("setOpen365Days", element.value);
                    }
                    if(element.label=="RECEIVE_CODES") {
                        commit("setReceiveCodes", element.value);
                    }
                    if(element.label=="RECEIVE_CODE_AFTER_RESA") {
                        commit("setReceiveCodeAfterResa", element.value);
                    }
                    if(element.label=="DID_NOT_RECEIVE_CODE") {
                        commit("setDidNotReceiveCode", element.value);
                    }
                    if(element.label=="DID_NOT_RECEIVE_CODE_REPLY") {
                        commit("setDidNotReceiveCodeReply", element.value);
                    }
                    if(element.label=="STILL_CANNOT_FIND_EMAIL") {
                        commit("setStillCannotFindEmail", element.value);
                    }
                    if(element.label=="LOSE_MY_CODE") {
                        commit("setLoseMyCode", element.value);
                    }
                    if(element.label=="LOSE_MY_CODE_REPLY") {
                        commit("setLoseMyCodeReply", element.value);
                    }
                    if(element.label=="REFUND_RESA") {
                        commit("setRefundResa", element.value);
                    }
                    if(element.label=="REFUND_RESA_REPLY") {
                        commit("setRefundResaReply", element.value);
                    }
                    if(element.label=="LUGGAGE_INSURED") {
                        commit("setLuggageInsured", element.value);
                    }
                    if(element.label=="LUGGAGE_INSURED_REPLY") {
                        commit("setLuggageInsuredReply", element.value);
                    }
                    if(element.label=="WHEN_BOX_ACCESS") {
                        commit("setWhenBoxAccess", element.value);
                    }
                    if(element.label=="WHEN_BOX_ACCESS_REPLY") {
                        commit("setWhenBoxAccessReply", element.value);
                    }
                    if(element.label=="CHECKOUT_TIME") {
                        commit("setCheckoutTime", element.value);
                    }
                    if(element.label=="CHECKOUT_TIME_REPLY") {
                        commit("setCheckoutTimeReply", element.value);
                    }
                    if(element.label=="KEEP_INSIDE_BOX") {
                        commit("setKeepInsideBox", element.value);
                    }
                    if(element.label=="KEEP_INSIDE_BOX_REPLY") {
                        commit("setKeepInsideBoxReply", element.value);
                    }
                    if(element.label=="PROHIBITED_INSIDE_BOX") {
                        commit("setProhibitedInsideBox", element.value);
                    }
                    if(element.label=="PROHIBITED_INSIDE_BOX_REPLY") {
                        commit("setProhibitedInsideBoxReply", element.value);
                    }
                    if(element.label=="PROHIBITED_INSIDE_BOX_REPLY_1") {
                        commit("setProhibitedInsideBoxReply1", element.value);
                    }
                    if(element.label=="ANOTHER_PERSON_PICK") {
                        commit("setAnotherPersonPick", element.value);
                    }
                    if(element.label=="ANOTHER_PERSON_PICK_REPLY") {
                        commit("setAnotherPersonPickReply", element.value);
                    }
                    if(element.label=="STAY_ON_PREMISES") {
                        commit("setStayOnPremises", element.value);
                    }
                    if(element.label=="STAY_ON_PREMISES_REPLY") {
                        commit("setStayOnPremisesReply", element.value);
                    }
                    if(element.label=="STAY_ON_PREMISES_REPLY_1") {
                        commit("setStayOnPremisesReply1", element.value);
                    }
                    if(element.label=="TAKE_PHOTOS") {
                        commit("setTakePhotos", element.value);
                    }
                    if(element.label=="TAKE_PHOTOS_REPLY") {
                        commit("setTakePhotosReply", element.value);
                    }
                    if(element.label=="PLEASE_CHECK_DIMENSIONS") {
                        commit("setPleaseCheckDimensions", element.value);
                    }
                    if(element.label=="CHANGE_LANGUAGE") {
                        commit("setChangeLanguage", element.value);
                    }
                    if(element.label=="ENGLISH") {
                        commit("setEnglish", element.value);
                    }
                    if(element.label=="FRENCH") {
                        commit("setFrench", element.value);
                    }
                    if(element.label=="PORTUGUESE") {
                        commit("setPortuguese", element.value);
                    }
                    if(element.label=="SPANISH") {
                        commit("setSpanish", element.value);
                    }
                });
            }
        });
    }
}

const mutations = {
    setSelectedLanguage(state, language) {
        state.selectedLanguage = language;
    },
    setOurConsign(state, our_consign) {
        state.our_consign = our_consign;
    },
    setWithLightness(state, with_lightness) {
        state.with_lightness = with_lightness;
    },
    setHowItWorks(state, how_it_works) {
        state.how_it_works = how_it_works;
    },
    setReserve(state, reserve) {
        state.reserve = reserve;
    },
    setOnlineReservation(state, online_reservation) {
        state.online_reservation = online_reservation;
    },
    setAccessCodes(state, access_codes) {
        state.access_codes = access_codes;
    },
    setReservationConfirmed(state, reservation_confirmed) {
        state.reservation_confirmed = reservation_confirmed;
    },
    setReceiptInstruction(state, receipt_instruction) {
        state.receipt_instruction = receipt_instruction;
    },
    setStoreYourLuggage(state, store_your_luggage) {
        state.store_your_luggage = store_your_luggage;
    },
    setPlaceYourBelongings(state, place_your_belongings) {
        state.place_your_belongings = place_your_belongings;
    },
    setEnjoy(state, enjoy) {
        state.enjoy = enjoy;
    },
    setExplorePortoHandsFree(state, explore_porto_hands_free) {
        state.explore_porto_hands_free = explore_porto_hands_free;
    },
    setSchedules(state, schedules) {
        state.schedules = schedules;
    },
    setFreeAccess(state, free_access) {
        state.free_access = free_access;
    },
    setTotalAutonomy(state, total_autonomy) {
        state.total_autonomy = total_autonomy;
    },
    setMondayToSunday(state, monday_to_sunday) {
        state.monday_to_sunday = monday_to_sunday;
    },
    setOpenOn(state, open_on) {
        state.open_on = open_on;
    },
    setMandatoryDeparture(state, mandatory_departure) {
        state.mandatory_departure = mandatory_departure;
    },
    setStorageAssumptions(state, storage_assumptions) {
        state.storage_assumptions = storage_assumptions;
    },
    setBoxSize(state, box_size) {
        state.box_size = box_size;
    },
    setTypeOfBaggage(state, type_of_baggage) {
        state.type_of_baggage = type_of_baggage;
    },
    setLuggage(state, luggage) {
        state.luggage = luggage;
    },
    setCarryOnLuggage(state, carry_on_luggage) {
        state.carry_on_luggage = carry_on_luggage;
    },
    setBackpack(state, backpack) {
        state.backpack = backpack;
    },
    setEurosPerBox(state, euros_per_box) {
        state.euros_per_box = euros_per_box;
    },
    setTheBoxCanHold(state, the_box_can_hold) {
        state.the_box_can_hold = the_box_can_hold;
    },
    setMissingBaggage(state, missing_baggage) {
        state.missing_baggage = missing_baggage;
    },
    setWithUsFeelSafe(state, with_us_feel_safe) {
        state.with_us_feel_safe = with_us_feel_safe;
    },
    setInsuredBy(state, insured_by) {
        state.insured_by = insured_by;
    },
    setWithUsYourLuggage(state, with_us_your_luggage) {
        state.with_us_your_luggage = with_us_your_luggage;
    },
    setPermisesUnderVideo(state, permises_under_video) {
        state.permises_under_video = permises_under_video;
    },
    setDaysAWeek(state, days_a_week) {
        state.days_a_week = days_a_week;
    },
    setWhoAreWe(state, who_are_we) {
        state.who_are_we = who_are_we;
    },
    setIsAnAutomated(state, is_an_automated) {
        state.is_an_automated = is_an_automated;
    },
    setThisWay(state, this_way) {
        state.this_way = this_way;
    },
    setAReservationWithUs(state, a_reservation_with_us) {
        state.a_reservation_with_us = a_reservation_with_us;
    },
    setSecurity(state, security) {
        state.security = security;
    },
    setOurAutomatedIsEquipped(state, our_automated_is_equipped) {
        state.our_automated_is_equipped = our_automated_is_equipped;
    },
    setThisEnsures(state, this_ensures) {
        state.this_ensures = this_ensures;
    },
    setAccessibilityDays(state, accessibility_days) {
        state.accessibility_days = accessibility_days;
    },
    setOurAutomatedIsAvail(state, our_automated_is_avail) {
        state.our_automated_is_avail = our_automated_is_avail;
    },
    setConvenience(state, convenience) {
        state.convenience = convenience;
    },
    setByReservingABox(state, by_reserving_a_box) {
        state.by_reserving_a_box = by_reserving_a_box;
    },
    setPlaceToStore(state, place_to_store) {
        state.place_to_store = place_to_store;
    },
    setThisAllows(state, this_allows) {
        state.this_allows = this_allows;
    },
    setConsiderableSaving(state, considerable_saving) {
        state.considerable_saving = considerable_saving;
    },
    setHowCanICheckAvail(state, how_can_i_check_avail) {
        state.how_can_i_check_avail = how_can_i_check_avail;
    },
    setToCheckAvail(state, to_check_avail) {
        state.to_check_avail = to_check_avail;
    },
    setHowCanIBook(state, how_can_i_book) {
        state.how_can_i_book = how_can_i_book;
    },
    setReservingALocker(state, reserving_a_locker) {
        state.reserving_a_locker = reserving_a_locker;
    },
    setWhatArePayMeth(state, what_are_pay_meth) {
        state.what_are_pay_meth = what_are_pay_meth;
    },
    setWeAcceptApyMeth(state, we_accept_apy_meth) {
        state.we_accept_apy_meth = we_accept_apy_meth;
    },
    setBookInAdvance(state, book_in_advance) {
        state.book_in_advance = book_in_advance;
    },
    setAdvanceBooking(state, advance_booking) {
        state.advance_booking = advance_booking;
    },
    setReservationDuration(state, reservation_duration) {
        state.reservation_duration = reservation_duration;
    },
    setPriceBasedOn(state, price_based_on) {
        state.price_based_on = price_based_on;
    },
    setOpeningDays(state, opening_days) {
        state.opening_days = opening_days;
    },
    setOpen365Days(state, open_365_days) {
        state.open_365_days = open_365_days;
    },
    setReceiveCodes(state, receive_codes) {
        state.receive_codes = receive_codes;
    },
    setReceiveCodeAfterResa(state, receive_code_after_resa) {
        state.receive_code_after_resa = receive_code_after_resa;
    },
    setDidNotReceiveCode(state, did_not_receive_code) {
        state.did_not_receive_code = did_not_receive_code;
    },
    setDidNotReceiveCodeReply(state, did_not_receive_code_reply) {
        state.did_not_receive_code_reply = did_not_receive_code_reply;
    },
    setStillCannotFindEmail(state, still_cannot_find_email) {
        state.still_cannot_find_email = still_cannot_find_email;
    },
    setLoseMyCode(state, lose_my_code) {
        state.lose_my_code = lose_my_code;
    },
    setLoseMyCodeReply(state, lose_my_code_reply) {
        state.lose_my_code_reply = lose_my_code_reply;
    },
    setRefundResa(state, refund_resa) {
        state.refund_resa = refund_resa;
    },
    setRefundResaReply(state, refund_resa_reply) {
        state.refund_resa_reply = refund_resa_reply;
    },
    setLuggageInsured(state, luggage_insured) {
        state.luggage_insured = luggage_insured;
    },
    setLuggageInsuredReply(state, luggage_insured_reply) {
        state.luggage_insured_reply = luggage_insured_reply;
    },
    setWhenBoxAccess(state, when_box_access) {
        state.when_box_access = when_box_access;
    },
    setWhenBoxAccessReply(state, when_box_access_reply) {
        state.when_box_access_reply = when_box_access_reply;
    },
    setCheckoutTime(state, checkout_time) {
        state.checkout_time = checkout_time;
    },
    setCheckoutTimeReply(state, checkout_time_reply) {
        state.checkout_time_reply = checkout_time_reply;
    },
    setKeepInsideBox(state, keep_inside_box) {
        state.keep_inside_box = keep_inside_box;
    },
    setKeepInsideBoxReply(state, keep_inside_box_reply) {
        state.keep_inside_box_reply = keep_inside_box_reply;
    },
    setProhibitedInsideBox(state, prohibited_inside_box) {
        state.prohibited_inside_box = prohibited_inside_box;
    },
    setProhibitedInsideBoxReply(state, prohibited_inside_box_reply) {
        state.prohibited_inside_box_reply = prohibited_inside_box_reply;
    },
    setProhibitedInsideBoxReply1(state, prohibited_inside_box_reply_1) {
        state.prohibited_inside_box_reply_1 = prohibited_inside_box_reply_1;
    },
    setAnotherPersonPick(state, another_person_pick) {
        state.another_person_pick = another_person_pick;
    },
    setAnotherPersonPickReply(state, another_person_pick_reply) {
        state.another_person_pick_reply = another_person_pick_reply;
    },
    setStayOnPremises(state, stay_on_premises) {
        state.stay_on_premises = stay_on_premises;
    },
    setStayOnPremisesReply(state, stay_on_premises_reply) {
        state.stay_on_premises_reply = stay_on_premises_reply;
    },
    setStayOnPremisesReply1(state, stay_on_premises_reply_1) {
        state.stay_on_premises_reply_1 = stay_on_premises_reply_1;
    },
    setTakePhotos(state, take_photos) {
        state.take_photos = take_photos;
    },
    setTakePhotosReply(state, take_photos_reply) {
        state.take_photos_reply = take_photos_reply;
    },
    setPleaseCheckDimensions(state, please_check_dimensions) {
        state.please_check_dimensions = please_check_dimensions;
    },
    setChangeLanguage(state, change_language) {
        state.change_language = change_language;
    },
    setEnglish(state, english) {
        state.english = english;
    },
    setFrench(state, french) {
        state.french = french;
    },
    setPortuguese(state, portuguese) {
        state.portuguese = portuguese;
    },
    setSpanish(state, spanish) {
        state.spanish = spanish;
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
