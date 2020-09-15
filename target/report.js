$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Adults.feature");
formatter.feature({
  "name": "verifying the adaction functionalties",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" details on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cloc\u003e\", \"\u003chotel\u003e\", \"\u003croomsType\u003e\",\"\u003cnoRooms\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\" details on search hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cfirstName\u003e\", \"\u003clastName\u003e\",\"\u003caddrss\u003e\",\"\u003ccardNo\u003e\",\"\u003ccardType\u003e\",\"\u003cexpMonth\u003e\",\"\u003cexpYear\u003e\" and \"\u003ccvv\u003e\" details on booking page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "loc",
        "hotel",
        "roomsType",
        "noRooms",
        "adults",
        "childrens",
        "firstName",
        "lastName",
        "addrss",
        "cardNo",
        "cardType",
        "expMonth",
        "expYear",
        "cvv"
      ]
    },
    {
      "cells": [
        "kalaivinitha",
        "W24133",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "1 - One",
        "0 - None",
        "kalai",
        "selvan",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "divyamathi",
        "BKX9A5",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "2 - Two",
        "0 - None",
        "diviy",
        "mathi",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "edwinraj",
        "edwin@123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "3 - Three",
        "0 - None",
        "Edwin",
        "raj",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "4 - Four",
        "0 - None",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalaivinitha\" and \"W24133\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"1 - One\",\"1 - One\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalai\", \"selvan\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"divyamathi\" and \"BKX9A5\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"1 - One\",\"2 - Two\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"diviy\", \"mathi\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"edwinraj\" and \"edwin@123\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"1 - One\",\"3 - Three\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Edwin\", \"raj\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"1 - One\",\"4 - Four\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/Childrens.feature");
formatter.feature({
  "name": "verifying the adaction functionalties",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" details on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cloc\u003e\", \"\u003chotel\u003e\", \"\u003croomsType\u003e\",\"\u003cnoRooms\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\" details on search hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cfirstName\u003e\", \"\u003clastName\u003e\",\"\u003caddrss\u003e\",\"\u003ccardNo\u003e\",\"\u003ccardType\u003e\",\"\u003cexpMonth\u003e\",\"\u003cexpYear\u003e\" and \"\u003ccvv\u003e\" details on booking page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "loc",
        "hotel",
        "roomsType",
        "noRooms",
        "adults",
        "childrens",
        "firstName",
        "lastName",
        "addrss",
        "cardNo",
        "cardType",
        "expMonth",
        "expYear",
        "cvv"
      ]
    },
    {
      "cells": [
        "kalaivinitha",
        "W24133",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "0 - None",
        "kalai",
        "selvan",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "divyamathi",
        "BKX9A5",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "1 - One",
        "diviy",
        "mathi",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "edwinraj",
        "edwin@123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "2 - Two",
        "Edwin",
        "raj",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "3 - Three",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "4 - Four",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalaivinitha\" and \"W24133\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalai\", \"selvan\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"divyamathi\" and \"BKX9A5\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"diviy\", \"mathi\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"edwinraj\" and \"edwin@123\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"2 - Two\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Edwin\", \"raj\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"3 - Three\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"4 - Four\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/NoofRooms.feature");
formatter.feature({
  "name": "verifying the adaction functionalties",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" details on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cloc\u003e\", \"\u003chotel\u003e\", \"\u003croomsType\u003e\",\"\u003cnoRooms\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\" details on search hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cfirstName\u003e\", \"\u003clastName\u003e\",\"\u003caddrss\u003e\",\"\u003ccardNo\u003e\",\"\u003ccardType\u003e\",\"\u003cexpMonth\u003e\",\"\u003cexpYear\u003e\" and \"\u003ccvv\u003e\" details on booking page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "loc",
        "hotel",
        "roomsType",
        "noRooms",
        "adults",
        "childrens",
        "firstName",
        "lastName",
        "addrss",
        "cardNo",
        "cardType",
        "expMonth",
        "expYear",
        "cvv"
      ]
    },
    {
      "cells": [
        "kalaivinitha",
        "W24133",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "1 - One",
        "1 - One",
        "0 - None",
        "kalai",
        "selvan",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "divyamathi",
        "BKX9A5",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "2 - Two",
        "1 - One",
        "1 - One",
        "diviy",
        "mathi",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "edwinraj",
        "edwin@123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "1 - One",
        "Edwin",
        "raj",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "4 - Four",
        "1 - One",
        "1 - One",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "5 - Five",
        "1 - One",
        "1 - One",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "kalaivinitha",
        "W24133",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "6 - Six",
        "1 - One",
        "0 - None",
        "kalai",
        "selvan",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "divyamathi",
        "BKX9A5",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "7 - Seven",
        "1 - One",
        "1 - One",
        "diviy",
        "mathi",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "edwinraj",
        "edwin@123",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "8 - Eight",
        "1 - One",
        "1 - One",
        "Edwin",
        "raj",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "9 - Nine",
        "1 - One",
        "1 - One",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "10 - Ten",
        "1 - One",
        "1 - One",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalaivinitha\" and \"W24133\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"1 - One\",\"1 - One\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalai\", \"selvan\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"divyamathi\" and \"BKX9A5\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"2 - Two\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"diviy\", \"mathi\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"edwinraj\" and \"edwin@123\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Edwin\", \"raj\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"4 - Four\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"5 - Five\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalaivinitha\" and \"W24133\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"6 - Six\",\"1 - One\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalai\", \"selvan\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"divyamathi\" and \"BKX9A5\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"7 - Seven\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"diviy\", \"mathi\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"edwinraj\" and \"edwin@123\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"8 - Eight\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Edwin\", \"raj\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"9 - Nine\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"10 - Ten\",\"1 - One\" and \"1 - One\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("src/test/resources/Features/RoomsType.feature");
formatter.feature({
  "name": "verifying the adaction functionalties",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" details on loginpage",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cloc\u003e\", \"\u003chotel\u003e\", \"\u003croomsType\u003e\",\"\u003cnoRooms\u003e\",\"\u003cadults\u003e\" and \"\u003cchildrens\u003e\" details on search hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should enter \"\u003cfirstName\u003e\", \"\u003clastName\u003e\",\"\u003caddrss\u003e\",\"\u003ccardNo\u003e\",\"\u003ccardType\u003e\",\"\u003cexpMonth\u003e\",\"\u003cexpYear\u003e\" and \"\u003ccvv\u003e\" details on booking page",
  "keyword": "When "
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "loc",
        "hotel",
        "roomsType",
        "noRooms",
        "adults",
        "childrens",
        "firstName",
        "lastName",
        "addrss",
        "cardNo",
        "cardType",
        "expMonth",
        "expYear",
        "cvv"
      ]
    },
    {
      "cells": [
        "kalaivinitha",
        "W24133",
        "Sydney",
        "Hotel Creek",
        "Standard",
        "3 - Three",
        "1 - One",
        "0 - None",
        "kalai",
        "selvan",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "divyamathi",
        "BKX9A5",
        "Sydney",
        "Hotel Creek",
        "Deluxe",
        "3 - Three",
        "2 - Two",
        "0 - None",
        "diviy",
        "mathi",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "edwinraj",
        "edwin@123",
        "Sydney",
        "Hotel Creek",
        "Double",
        "3 - Three",
        "3 - Three",
        "0 - None",
        "Edwin",
        "raj",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    },
    {
      "cells": [
        "sssaravinth30",
        "Aravinth",
        "Sydney",
        "Hotel Creek",
        "Super Deluxe",
        "3 - Three",
        "4 - Four",
        "0 - None",
        "Arav",
        "vikram",
        "Tenkasi",
        "4234567898761234",
        "VISA",
        "February",
        "2021",
        "234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalaivinitha\" and \"W24133\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Standard\",\"3 - Three\",\"1 - One\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"kalai\", \"selvan\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"divyamathi\" and \"BKX9A5\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Deluxe\",\"3 - Three\",\"2 - Two\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"diviy\", \"mathi\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"edwinraj\" and \"edwin@123\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Double\",\"3 - Three\",\"3 - Three\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Edwin\", \"raj\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying adaction login details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Reg"
    }
  ]
});
formatter.step({
  "name": "user is on the adaction login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageStep.user_is_on_the_adaction_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"sssaravinth30\" and \"Aravinth\" details on loginpage",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_loginpage(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on login page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Sydney\", \"Hotel Creek\", \"Super Deluxe\",\"3 - Three\",\"4 - Four\" and \"0 - None\" details on search hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_search_hotel_page(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify search hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_search_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user shoud choose the radio button on select hotel page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_shoud_choose_the_radio_button_on_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on continue button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_continue_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify select hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_select_hotel_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"Arav\", \"vikram\",\"Tenkasi\",\"4234567898761234\",\"VISA\",\"February\",\"2021\" and \"234\" details on booking page",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageStep.user_should_enter_and_details_on_booking_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click on booking button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_should_click_on_booking_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify hotel booking page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageStep.user_should_verify_hotel_booking_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user can check the booking confirmation order inn the page",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageStep.user_can_check_the_booking_confirmation_order_inn_the_page()"
});
formatter.result({
  "status": "passed"
});
});