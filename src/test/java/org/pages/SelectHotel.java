package org.pages;

import org.lip.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SelectHotel extends Base {
	public SelectHotel(){
		PageFactory.initElements(driver, this);
	}
	@FindBy (id="radiobutton_0")
	private WebElement btnRadio;
	
	@FindBy  (id="continue")
	private WebElement btnSubmit;

	public WebElement getBtnRadio() {
		return btnRadio;
	}

	public WebElement getBtnSubmit() {
		return btnSubmit;
	}
}
