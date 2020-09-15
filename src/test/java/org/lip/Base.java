package org.lip;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Base {
	public static WebDriver driver;
	public static WebDriver getDriver() {
		if(driver==null){
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\KALAI\\workspace\\Cucumber9AM\\drivers\\chromedriverr.exe");
	    driver=new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
	    }
	    return driver;
	}
	public void loadUrl(String url) {
		driver.get(url);
	}
	public void type(WebElement element, String data) {
		element.sendKeys(data);
	}
	public void btnClick(WebElement element) {
		element.click();
	}
	public String getAttribute(WebElement element, String data) {
		String att = element.getAttribute(data);
		return att;
	}
	public void selectByVisibleText(WebElement  element, String data) {
		Select a = new Select(element);
		a.selectByVisibleText(data);
	}
	public String getCurrentUrl(){
		String currentUrl = driver.getCurrentUrl();
		return currentUrl;
	}
}
