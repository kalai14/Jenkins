package com.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.lip.Base;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\Features", glue={"com.stepdefinition"}, 
monochrome=true,strict=true, plugin={"json:src\\test\\resources\\Repo\\jsonRep.json","html:target"})
public class TestRunnerClass extends Base {
	@AfterClass
	public static void afterClass() {
	driver.quit();	
	}
}
