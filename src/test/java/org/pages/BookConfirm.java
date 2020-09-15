package org.pages;

import org.lip.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BookConfirm extends Base {

	public BookConfirm() {
		PageFactory.initElements(driver, this);
	}
	@FindBy (id="order_no")
	private WebElement infor;
	
	public WebElement getInfor() {
		return infor;
	}
}
