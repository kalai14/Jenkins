package org.pages;

import org.lip.Base;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SearchHotel extends Base{
	public SearchHotel() {
		PageFactory.initElements(driver, this);	
	}
	@FindBy(id="location")
	private WebElement txtLocation;

	@FindBy (id="hotels")
	private WebElement txtHotel;
	
	@FindBy (id="room_type")
	private WebElement txtRoomType;
	
	@FindBy (id="room_nos")
	private WebElement txtRoomNos;
	
	@FindBy (id="adult_room")
    private	WebElement txtAdult;
	
	@FindBy (id="child_room")
	private WebElement txtChild;
	
	@FindBy (id="Submit")
	private WebElement btnSearch;

	public WebElement getTxtLocation() {
		return txtLocation;
	}

	public WebElement getTxtHotel() {
		return txtHotel;
	}

	public WebElement getTxtRoomType() {
		return txtRoomType;
	}

	public WebElement getTxtRoomNos() {
		return txtRoomNos;
	}

	public WebElement getTxtAdult() {
		return txtAdult;
	}

	public WebElement getTxtChild() {
		return txtChild;
	}

	public WebElement getBtnSearch() {
		return btnSearch;
	}

}