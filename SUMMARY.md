# Summary

Here I analyze the passengers (not crew) of the Titanic. Using a story board first I present some insights of the data such:

* Gender
* Age distribution
* Class distribution

The data includes information from 1309 people. In the last graph, that shows survivors, those that don't include the age have been removed to make the graph easier to read and understand.

# Design

My first idea was to just show a graph that present the survivors grouped by different attributes, like age, gender and class. But later I realized that without "explaining" the data set to the viewer was difficult to get some important details from that last graph or just to get a good general picture of what happened. This storyboard also allows us to remove redundant labels and legends because we only need to introduce them once.  This is the storyboard path:

* __First page:__ an introduction about Titanic.
* __Second page:__ With a horizontal bar I show the number of people on each class and the gender distribution. It shows that there are more people on third class, and also male are majority. No labels are included to make it easier to read, since the title already makes clear that we are counting people per each class. Chosen colors are also related to gender, being similar to the usual "blue" and "pink" associated with gender, but with a hue that makes it easier to see.
* __Third page:__ the graph shows distribution based on age rages as the title explains. Also included those without age in the dataset. Here it shows that passengers between 20-30 are majority. For those without age I have increased the transparency, mostly telling the viewer that the data there is not that important for what I want to show and it will me possible be removed as we will see in next page. In this graph I include a label to explain we are dealing with age ranges because I don't everybody to know what is a range or how it is usually showed. Also, added stacked bar to show gender as proposed by Przemek.
* __Fourth page:__ Now that the viewer has enough information about the different attributes of the passengers, I present the last graph that shows the survivors based on those attributes. The viewer can interactively choose the class of the passengers. Here the viewer can identify how first class had priority over the other two, and female over male. After the first review from Udacity I changed the bars to use percentage (from averages) instead of raw counts. That small change gives us better visibility of the survival chances between classes. Also, removed bubbles and added lines, because after changing bubbles to use percentages they become a little bit difficult to read. Now, gender survival percentage are lines, that show that female had preference. This is also that wasn't showing well in previous version where bubbles were also using raw count.

# Feedback

###_Andrew Moore:_

* __What do you notice in the visualization?__

I notice that the visualizations provide some hidden data. Hover over the elements and they provide more accuracy to the axis. That's neat. The series are contrasting colors to show their boundaries. Some axis are not labelled but my brain assumes the metric is frequency. I'm sure that's naturally inferred by anyone that's seen a chart before.

* __What questions do you have about the data?__

The data presented is clear and doesn't leave me with any further questions about it directly.

* __What relationships do you notice?__

Survival rate is:
Young and poor (physically able)
Older and rich (privileged with a wakeup call)

* __What do you think is the main takeaway from this visualization?__

Don't go on a cruise if you're older and poor. The sample suggests you wont survive a crash.

* __Is there something you don’t understand in the graphic?__

The Survivor chart shows male and female balloons but I'm unsure the significance of the overlap.
I was slightly confused over was the `Survived=1` element in the Survivors hover. I think that label could be removed.

###_Gonzalo Cruz:_

####Total passengers per Class
* __What do you notice in the visualization?__
Distribution of women and men by class. Total 1st class is higher than 2nd class, which would be somehow irregular nowadays. Total 3rd class passengers is higher than 2nd and 1st together so more than half passengers was located in the 3rd class.

* __What questions do you have about the data?__
Where is the total (sum of 1st, 2nd and 3rd classes) referenced?

* __What relationship do you notice?__
In all cases the total sum of males passengers is always greater than that of women for each class.

* __What do u think is the main takeaway from this visualization?__
Class distribution by genre. The most passengers was male and located belonging to the 3rd class.

* __Is there something you don't understand in the graphic?__
No

####Total passengers by age range

* __What do you notice in the visualization?__
That sadly a lot of young people between 20 and 30 years was in this ship.

* __What questions do you have about the data?__
Including percent rates would be helpful. Why is age bar between 0 and 10 in pink? Where is the legend?

* __What relationship do you notice?__
Most passengers was between 20 and 40 years old, and was not data about the age of more than 250 people.

* __What do u think is the main takeaway from this visualization?__
To explain the distribution of passengers by age. Most passengers was between 20 and 40 years old.

* __Is there something you don't understand in the graphic?__
Yes. Pink colour of 0-10 age range.

####Survivors

* __What do you notice in the visualization?__
Women and children had preference to exit the ship and survived in higher numbers than men, barring for 3st class  where survived slightly more men than women ( between 20 and 40 years old ). But if we bear in mind that for the 3rd class there was a total of 493 males and 216 females (and is the class with more men than women ratio of all classes), in proportion a lot more women survived than that of men for the 3st class and age range 20-40 so it's not an anomaly.
No one between 50-60 and 70-80 belonging to the 3st class survived.

* __What questions do you have about the data?__
Would be great to know how many of the crew members survived, if any.

* __What relationship do you notice?__
Women and children exited the ship first.

* __What do u think is the main takeaway from this visualization?__
Male-female age distribution survivors by class. Women and children survived in higher numbers than men.

* __Is there something you don't understand in the graphic?__
No

###_Przemyslaw Malkowski:_

* __What do you notice in the visualization?__
* Most people were traveling in 3rd class.
* Around two times more men then women in general.
* Man vs women disproportion is highest in 3rd class.
* Most of the people were in early production age, very few old people.
* Very few people relatively from 3rd class have survived.
* More women and children survived in general.
* Very few adult men survived in 2nd class.
* Only in 3rd class, more adult men survived then women.

* __What questions do you have about the data?__
* What was the total men/women ratio in different age groups?

* __What relationships do you notice?__
The higher class the higher chance for survival (maybe because 3rd class trapped in closed rooms?)

* __What do you think is the main takeaway from this visualization?__
No body cared about hundreds of people in 3rd class, and/or they had the longest and hardest way to the upper deck.

* __Is there something you don't understand in the graphic?__
No.

# Resources

* I downloaded the dataset from http://biostat.mc.vanderbilt.edu/wiki/pub/Main/DataSets/titanic3.csv It is an updated and improved version (3) of what udacity provides. My visualizations need to show age ranges, and the original data missed lot of ages values.

* Dimple.js documentation. Since most (or all) of the training in Udacity about animation and interactivity is using d3, documentation and code examples of dimple.js are the way to go.

* w3schools.com's CSS framework.
