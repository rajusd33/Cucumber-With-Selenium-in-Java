package com.zappos.pom;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class BootsPage extends PageBase{
	
	public BootsPage(WebDriver driver) {
		super(driver);
		PageFactory.initElements(driver, this);
	}

	public void selectBootBrandFilter(String item){
		WebElement itemLink = waitForElement(By.xpath("//*[@id='FCTbrandnamefacetSelect']/a[contains(text(),'" + item + "')]"));
		highlightElement(itemLink);
		itemLink.click();
	}
	
	public void selectProductByProductName(String pName){		
		WebElement itemLink = waitForElement(By.xpath("//*[@id='searchResults']/a/span[text()='" + pName + "']"));
		highlightElement(itemLink);
		itemLink.click();
	}
	
	public void verifyPageTitle(String expected){
		String actual = driver.getTitle();
		Assert.assertEquals(expected, actual);
	}
}
