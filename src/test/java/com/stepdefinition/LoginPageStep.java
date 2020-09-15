package com.stepdefinition;

import org.lip.Base;
import org.openqa.selenium.WebElement;
import org.pages.BookConfirm;
import org.pages.BookHotel;
import org.pages.LoginPage;
import org.pages.SearchHotel;
import org.pages.SelectHotel;

import com.manager.PageObjectManager;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class LoginPageStep extends Base {
	PageObjectManager pageObjectManager;
	LoginPage loginPage;
	SearchHotel searchHotelPage;
	SelectHotel selecthHotelPage;
	BookHotel bookHotelPage;
	BookConfirm bookConfirmPage;
	@Given("user is on the adaction login page")
	public void user_is_on_the_adaction_login_page() {
	    getDriver();
	    loadUrl("http://adactinhotelapp.com/");
	}

	@When("user should enter {string} and {string} details on loginpage")
	public void user_should_enter_and_details_on_loginpage(String userName, String password) {
	   pageObjectManager = PageObjectManager.getInstance();
	   loginPage = pageObjectManager.getLoginPage();
	   WebElement txtUser = loginPage.getTxtUserName();
	   type(txtUser, userName);
	   WebElement txtPwd = loginPage.getTxtPassword();
	   type(txtPwd, password);
	}

	@When("user should click on login page")
	public void user_should_click_on_login_page() {
	    WebElement btnLogin = loginPage.getBtnLogin();
	    btnClick(btnLogin);
	}

	@Then("user should verify login page")
	public void user_should_verify_login_page() {
		System.out.println("User is Verified");
		Assert.assertTrue("login Verified", driver.getCurrentUrl().contains("SearchHotel"));
	  	}
	@When("user should enter {string}, {string}, {string},{string},{string} and {string} details on search hotel page")
	public void user_should_enter_and_details_on_search_hotel_page(String loc, String hotel, String roomsType, String noRooms, String adults, String childrens) {
	    pageObjectManager = PageObjectManager.getInstance();
	    searchHotelPage = pageObjectManager.getSearchHotelPage();
	    WebElement txtLoc = searchHotelPage.getTxtLocation();
	    selectByVisibleText(txtLoc, loc);
	    WebElement txtHotel = searchHotelPage.getTxtHotel();
	    selectByVisibleText(txtHotel, hotel);
	    WebElement txtRoomType = searchHotelPage.getTxtRoomType();
	    selectByVisibleText(txtRoomType, roomsType);
	    WebElement txtRoomNos = searchHotelPage.getTxtRoomNos();
	    selectByVisibleText(txtRoomNos, noRooms);
	    WebElement txtAdult = searchHotelPage.getTxtAdult();
	    selectByVisibleText(txtAdult, adults);
	    WebElement txtChild = searchHotelPage.getTxtChild();
	    selectByVisibleText(txtChild, childrens);
	}

	@When("user should click on search button")
	public void user_should_click_on_search_button() {
	   WebElement btnSearch = searchHotelPage.getBtnSearch();
	   btnClick(btnSearch);
	}

	@Then("user should verify search hotel page")
	public void user_should_verify_search_hotel_page() {
		System.out.println("Search page verified");
		Assert.assertTrue("search page Verified", driver.getCurrentUrl().contains("SelectHotel"));
	}

	@When("user shoud choose the radio button on select hotel page")
	public void user_shoud_choose_the_radio_button_on_select_hotel_page() {
		pageObjectManager = PageObjectManager.getInstance();
		selecthHotelPage = pageObjectManager.getSelecthHotelPage();
		WebElement btnRadio = selecthHotelPage.getBtnRadio();
		btnClick(btnRadio);
	}

	@When("user should click on continue button")
	public void user_should_click_on_continue_button() {
	    WebElement btnSubmit = selecthHotelPage.getBtnSubmit();
	    btnClick(btnSubmit);
	    }

	@Then("user should verify select hotel page")
	public void user_should_verify_select_hotel_page() {
		System.out.println("Select Hotel page verified");
	   Assert.assertTrue("search page Verified", driver.getCurrentUrl().contains("BookHotel"));
	}

	@When("user should enter {string}, {string},{string},{string},{string},{string},{string} and {string} details on booking page")
	public void user_should_enter_and_details_on_booking_page(String firstName, String lastName, String addrss, String cardNo , String cardType, String expMonth, String expYear, String cvv) {
		pageObjectManager  = PageObjectManager.getInstance();
		bookHotelPage = pageObjectManager.getBookHotelPage();
		WebElement txtfName = bookHotelPage.getTxtFirstName();
		type(txtfName, firstName);
		WebElement txtlName = bookHotelPage.getTxtLastName();
		type(txtlName, lastName);
		WebElement txtAddress = bookHotelPage.getTxtAddress();
		type(txtAddress, addrss);
		WebElement txtCcNum = bookHotelPage.getTxtCcNum();
		type(txtCcNum, cardNo);
		WebElement txtCcType = bookHotelPage.getTxtCcType();
		selectByVisibleText(txtCcType, cardType);
		WebElement txtMonth = bookHotelPage.getTxtMonth();
		selectByVisibleText(txtMonth, expMonth);
		WebElement txtYear = bookHotelPage.getTxtYear();
		selectByVisibleText(txtYear, expYear);
		WebElement txtCvv = bookHotelPage.getTxtCvv();
		type(txtCvv, cvv);
	}

	@When("user should click on booking button")
	public void user_should_click_on_booking_button() {
		WebElement btnBook = bookHotelPage.getBtnBook();
		btnClick(btnBook);
	}

	@Then("user should verify hotel booking page")
	public void user_should_verify_hotel_booking_page() {
		System.out.println("Booking page verified");  
		//Assert.assertTrue("search page Verified", driver.getCurrentUrl().contains("BookingConfirm"));
	}

	@Then("user can check the booking confirmation order inn the page")
	public void user_can_check_the_booking_confirmation_order_inn_the_page() throws InterruptedException {
	    pageObjectManager = PageObjectManager.getInstance();
	    bookConfirmPage = pageObjectManager.getBookConfirmPage();
	    WebElement infor = bookConfirmPage.getInfor();
	    Thread.sleep(8000);
	    String orderNo = getAttribute(infor, "value");
	    System.out.println("The order number is: "+orderNo);
	}

}
