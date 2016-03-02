$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ZappNavigation.feature");
formatter.feature({
  "id": "navigation-and-verify-size,-width-selection-controls",
  "description": "",
  "name": "Navigation and verify Size, Width Selection controls",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2876416000,
  "status": "passed"
});
formatter.scenario({
  "id": "navigation-and-verify-size,-width-selection-controls;navigatioin-and-verify-if-size-and-width-selection-are-displayed",
  "description": "",
  "name": "Navigatioin and Verify if size and width selection are displayed",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User has Navigated to Zappos home page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User selects \"Shoes\" from Shop Men\u0027s",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "Select \"Boots\" from from Men\u0027s Shoes",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "A new page should appear with title \"Boots, Men | Shipped Free at Zappos\"",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "User select \"Keen Utility\" from brand menu",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "Select \"Pittsburgh Boot\" boots from the list",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Browser should navigate to Add to cart page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "user select Add to cart without selecting size/width",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "Please select a Size and Please select a width appear",
  "keyword": "Then ",
  "line": 12
});
formatter.match({
  "location": "AllSteps.User_has_Navigated_to_Zappos_home_page()"
});
formatter.result({
  "duration": 703234000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 14
    }
  ],
  "location": "AllSteps.user_Selects_menu_from_Shop_Men(String)"
});
formatter.result({
  "duration": 1076310000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots",
      "offset": 8
    }
  ],
  "location": "AllSteps.select_menu_from_Mens_Shoes(String)"
});
formatter.result({
  "duration": 2059855000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots, Men | Shipped Free at Zappos",
      "offset": 37
    }
  ],
  "location": "AllSteps.a_new_page_should_appear_with_title(String)"
});
formatter.result({
  "duration": 173005000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen Utility",
      "offset": 13
    }
  ],
  "location": "AllSteps.user_select_menu_from_brand_menu(String)"
});
formatter.result({
  "duration": 1359967000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh Boot",
      "offset": 8
    }
  ],
  "location": "AllSteps.Select_boots_from_the_list(String)"
});
formatter.result({
  "duration": 5458713000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.Browser_should_navigate_to_Add_to_cart_page()"
});
formatter.result({
  "duration": 854755000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.user_select_Add_to_cart_without_selecting_size_width()"
});
formatter.result({
  "duration": 225509000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.Please_select_a_Size_and_Please_select_a_width_appear()"
});
formatter.result({
  "duration": 3483404000,
  "status": "passed"
});
formatter.after({
  "duration": 178681000,
  "status": "passed"
});
formatter.uri("ZappNotifyMe.feature");
formatter.feature({
  "id": "verify-\"dont-see-your-size\"-link-and-complete-popup-window",
  "description": "",
  "name": "Verify \"Dont See your Size\" link and complete popup Window",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 2176177000,
  "status": "passed"
});
formatter.scenario({
  "id": "verify-\"dont-see-your-size\"-link-and-complete-popup-window;verify-\"dont-see-your-size\"-link-and-complete-popup-window",
  "description": "",
  "name": "Verify \"Dont See your Size\" link and complete popup Window",
  "keyword": "Scenario",
  "line": 3,
  "type": "scenario"
});
formatter.step({
  "name": "User has Navigated to Zappos home page",
  "keyword": "Given ",
  "line": 4
});
formatter.step({
  "name": "User selects \"Shoes\" from Shop Men\u0027s",
  "keyword": "When ",
  "line": 5
});
formatter.step({
  "name": "Select \"Boots\" from from Men\u0027s Shoes",
  "keyword": "And ",
  "line": 6
});
formatter.step({
  "name": "A new page should appear with title \"Boots, Men | Shipped Free at Zappos\"",
  "keyword": "Then ",
  "line": 7
});
formatter.step({
  "name": "User select \"Keen Utility\" from brand menu",
  "keyword": "When ",
  "line": 8
});
formatter.step({
  "name": "Select \"Pittsburgh Boot\" boots from the list",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "Browser should navigate to Add to cart page",
  "keyword": "Then ",
  "line": 10
});
formatter.step({
  "name": "click on Don\u0027t see your size Link",
  "keyword": "When ",
  "line": 11
});
formatter.step({
  "name": "Notify me Popup display",
  "keyword": "Then ",
  "line": 12
});
formatter.step({
  "name": "Fill Notify me with Email \"test@gmail.com\"",
  "keyword": "When ",
  "line": 13
});
formatter.step({
  "name": "Color with \"Raven/Yellow\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "Size with \"9\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "Width with \"EE - Wide\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "Select Notify me",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "Acknowledgement page displayed with Thank You",
  "keyword": "Then ",
  "line": 18
});
formatter.match({
  "location": "AllSteps.User_has_Navigated_to_Zappos_home_page()"
});
formatter.result({
  "duration": 728133000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shoes",
      "offset": 14
    }
  ],
  "location": "AllSteps.user_Selects_menu_from_Shop_Men(String)"
});
formatter.result({
  "duration": 1061456000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots",
      "offset": 8
    }
  ],
  "location": "AllSteps.select_menu_from_Mens_Shoes(String)"
});
formatter.result({
  "duration": 1968139000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Boots, Men | Shipped Free at Zappos",
      "offset": 37
    }
  ],
  "location": "AllSteps.a_new_page_should_appear_with_title(String)"
});
formatter.result({
  "duration": 183103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Keen Utility",
      "offset": 13
    }
  ],
  "location": "AllSteps.user_select_menu_from_brand_menu(String)"
});
formatter.result({
  "duration": 1366780000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pittsburgh Boot",
      "offset": 8
    }
  ],
  "location": "AllSteps.Select_boots_from_the_list(String)"
});
formatter.result({
  "duration": 2579700000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.Browser_should_navigate_to_Add_to_cart_page()"
});
formatter.result({
  "duration": 883023000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.click_on_Dont_See_Size()"
});
formatter.result({
  "duration": 352789000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.notify_Me_Popup_Display()"
});
formatter.result({
  "duration": 2085040000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@gmail.com",
      "offset": 27
    }
  ],
  "location": "AllSteps.fill_Notify_me_with_Email(String)"
});
formatter.result({
  "duration": 975532000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Raven/Yellow",
      "offset": 12
    }
  ],
  "location": "AllSteps.color_with(String)"
});
formatter.result({
  "duration": 1253065000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 11
    }
  ],
  "location": "AllSteps.size_with(String)"
});
formatter.result({
  "duration": 1635227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "EE - Wide",
      "offset": 12
    }
  ],
  "location": "AllSteps.width_with(String)"
});
formatter.result({
  "duration": 1508903000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.select_Notify_me()"
});
formatter.result({
  "duration": 2019091000,
  "status": "passed"
});
formatter.match({
  "location": "AllSteps.acknowledgement_Page_displayed_with_Thank_You()"
});
formatter.result({
  "duration": 356645000,
  "status": "passed"
});
formatter.after({
  "duration": 299388000,
  "status": "passed"
});
});