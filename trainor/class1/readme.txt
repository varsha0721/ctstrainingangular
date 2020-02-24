# HTML

> HTML 5

# Semantic Tags
<header>
<sidebar>
<section>
<aside>
<footer>
<figure>

# New API
1. local storage
2. Audio and Video Tags
3. GeoLocation
4. SVG and Canvas
5. Drag and Drop


# Web storage
> Session storage - data will be lost as we close the tab or browser
> Local Storage - data will remain save permanently untill we explicity 
                  delete the data
                  

1. saveing data
localstorage.setItem("key", "value")
localstorage.key = value

2. read data
localstorage.getItem("key")
localstorage.key

3. clear or remove data
localstorage.removeItem("key") // clear specific data
localstorage.clear()   // to clear all


# Session Storage
It will save the data till the time browser is opne or we have active Session

save
sessionStorage.setItem()

read
sessionStorage.getItem()

remove and delete
sessionStorage.clear()



# Media
HTML 5 introduce two new tag to integrate audio and video in your web page
<audio> Tags
<video> tag


# GeoLocation
This api help you to get the current location of the user
Some time we need to know the current location of the user to show more 
meaning or filter data 
Since the user location is the matter of user privacy it depend upon the
user wheather he/she want to share his/her location

getCurrentPosition(success Callback, error callback function)

success call back fucntion will give you user coordinates

error Handler call fucntionn we can use t handle the errors


# Drag and Drop
This help to add a cool feature like drag and Drop
we can select any itme drag it and the drop on the desire eleemnt in order to
appemd the eleemnt


draggable - true
onDragover()
ondragStart()


# HTML 5 we have new form elements

Text <input type="text" name="" id=""><br>
Password <input type="password" name="" id=""><br>
Number <input type="number" name="" id=""> <br>
Date <input type="date" name="" id=""><br>
Month <input type="month" name="" id=""><br>
Week <input type="week" name="" id=""><br>
Color <input type="color" name="" id=""><br>
Range <input type="range" name="" id=""><br>
Email <input type="email" name="" id=""><br>
Tel <input type="tel" name="" id=""><br>

<input type="submit" value="Submit"><br>
<input type="reset" value="Reset"><br>




