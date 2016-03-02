# Cucumber-With-Selenium-in-Java
Cucumber with Selenium in Java along with junit

BDD Test Automation with Cucumber-JVM.
This repository contains sample codes on How to use Cucumber with Selenium in Java.

# Cucumber-JVM
Cucumber-JVM is a Cucumber implementation for the most popular JVM languages.

# Step Definitions
Java Step Definitions are written in regular classes which don't need to extend or implement anything. They can be written either using lambda expressions or method annotations:

# JUnit Runner
This framework used JUnit Runner. 
The JUnit runner uses the JUnit framework to run Cucumber. All you need is a single empty class with an annotation:
You can run this test in the same way you run your other JUnit tests, using your IDE or your build tool (for example mvn test).

The JUnit Runner can also pick up configuration options defined via the @CucumberOptions annotation. 
For example, if you want to tell Cucumber to use the two formatter plugins pretty and html, you would specify it like this:

@RunWith(Cucumber.class)
@CucumberOptions(plugin = {"pretty", "html:target/cucumber"})

public class RunCukesTest {
}

#Feature File
Every .feature file conventionally consists of a single feature. A line starting with the keyword Feature followed by free indented text starts a feature. A feature usually contains a list of scenarios. You can write whatever you want up until the first scenario, which starts with the word Scenario (or localized equivalent; Gherkin is localized for dozens of languages) on a new line. You can use tagging to group features and scenarios together independent of your file and directory structure.

Every scenario consists of a list of steps, which must start with one of the keywords Given, When, Then, But or And. Cucumber treats them all the same, but you shouldn’t. 

In addition to a scenario, a feature may contain a background, scenario outline and examples. 

All codes in this repository is to be considered public domain unless stated otherwise.


