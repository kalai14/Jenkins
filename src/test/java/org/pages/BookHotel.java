package org.pages;

import org.lip.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookHotel extends Base{
	public BookHotel() {
		PageFactory.initElements(driver, this);
	}
	@FindBy (id="first_name")
	private WebElement  txtFirstName;
	
	@FindBy (id="last_name")
	private WebElement txtLastName;
	
	@FindBy (id="address")
	private WebElement txtAddress;
	
	@FindBy (id="cc_num")
	private WebElement txtCcNum;
	
	@FindBy (id="cc_type")
	private WebElement txtCcType;
	
	@FindBy (id="cc_exp_month")
	private WebElement txtMonth;
	
	@FindBy (id="cc_exp_year")
	private  WebElement txtYear;
	
	@FindBy (id="cc_cvv")
	private  WebElement txtCvv;
	
	@FindBy (id="book_now")
	private WebElement btnBook;

	public WebElement getTxtFirstName() {
		return txtFirstName;
	}

	public WebElement getTxtLastName() {
		return txtLastName;
	}

	public WebElement getTxtAddress() {
		return txtAddress;
	}

	public WebElement getTxtCcNum() {
		return txtCcNum;
	}

	public WebElement getTxtCcType() {
		return txtCcType;
	}

	public WebElement getTxtMonth() {
		return txtMonth;
	}

	public WebElement getTxtYear() {
		return txtYear;
	}

	public WebElement getTxtCvv() {
		return txtCvv;
	}

	public WebElement getBtnBook() {
		return btnBook;
	}

}
