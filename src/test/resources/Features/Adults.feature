Feature: verifying the adaction functionalties

Scenario Outline: verifying adaction login details
Given user is on the adaction login page
When user should enter "<userName>" and "<password>" details on loginpage
And user should click on login page
Then user should verify login page 
When user should enter "<loc>", "<hotel>", "<roomsType>","<noRooms>","<adults>" and "<childrens>" details on search hotel page
And user should click on search button
Then user should verify search hotel page
When user shoud choose the radio button on select hotel page
And user should click on continue button
Then user should verify select hotel page
When user should enter "<firstName>", "<lastName>","<addrss>","<cardNo>","<cardType>","<expMonth>","<expYear>" and "<cvv>" details on booking page
And user should click on booking button
Then user should verify hotel booking page
And user can check the booking confirmation order inn the page
Examples:
	| userName 			| password  	 | loc 	 	| hotel			  | roomsType | noRooms 	| adults 			| childrens | firstName | lastName 	| addrss 	| cardNo 						| cardType | expMonth 	| expYear | cvv |
	|	kalaivinitha	|	W24133	  	 | Sydney	|	Hotel Creek	|	Standard	|	1 - One	|	1 - One 		|	0 - None 	|	kalai			|	selvan		|	Tenkasi	|	4234567898761234	|	VISA		 |	February	|	2021		|	234	|
	|	divyamathi		|	BKX9A5	  	 | Sydney	|	Hotel Creek	|	Standard	|	1 - One	|	2 - Two 		|	0 - None 	|	diviy			|	mathi			|	Tenkasi	|	4234567898761234	|	VISA		 |	February	|	2021		|	234	|
	|	edwinraj			|	edwin@123	   | Sydney	|	Hotel Creek	|	Standard	|	1 - One	|	3 - Three 	|	0 - None 	|	Edwin			|	raj				|	Tenkasi	|	4234567898761234	|	VISA		 |	February	|	2021		|	234	|
	|	sssaravinth30	|	Aravinth	   | Sydney	|	Hotel Creek	|	Standard	|	1 - One	|	4 - Four 		|	0 - None 	|	Arav			|	vikram		|	Tenkasi	|	4234567898761234	|	VISA		 |	February	|	2021		|	234	|