package com.manager;

import org.lip.Base;
import org.pages.BookConfirm;
import org.pages.BookHotel;
import org.pages.LoginPage;
import org.pages.SearchHotel;
import org.pages.SelectHotel;

public class PageObjectManager extends Base {
	private static PageObjectManager pageObjectManager;
	private LoginPage loginPage;
	private SearchHotel searchHotel;
	private SelectHotel selectHotel;
	private BookHotel bookHotel;
	private BookConfirm bookConfirm;
	
	private PageObjectManager() {
	}
	public static PageObjectManager getInstance() {
		return(pageObjectManager == null) ? pageObjectManager = new PageObjectManager() :  pageObjectManager;
	}
	public LoginPage getLoginPage() {
		return(loginPage == null) ? loginPage = new LoginPage() :  loginPage;
	}
	public SearchHotel getSearchHotelPage() {
		return(searchHotel == null) ? searchHotel = new SearchHotel() :  searchHotel;
	}
	public SelectHotel getSelecthHotelPage() {
		return(selectHotel == null) ? selectHotel = new SelectHotel() :  selectHotel;
	}
	public BookHotel getBookHotelPage() {
		return(bookHotel == null) ? bookHotel = new BookHotel() :  bookHotel;
	}
	public BookConfirm getBookConfirmPage() {
		return(bookConfirm == null) ? bookConfirm = new BookConfirm() :  bookConfirm;
	}
	
}
