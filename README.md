# Getting Started with Create React App

How to make the placeholder images
cd into public/images/placeholders/{category}
run this command sqip -o 1.svg ../../../../src/images/work_is_hell/1.jpg

To deploy
npm run build
firebase deploy

To add a new collection

Add all the images and shit to the NFTContent file
Make the new placeholder images. Instructions above
Update getNavigation file
reduce the file size by using this website: https://express.adobe.com/tools/image-resize/# just click custom and then change the height to 550px and it will sort the width out automatically
Make a new file using the same approach and change the height to 1100. This is for the zoomed in version of the image when someone hovers over iut on the details page
Optimize the image file sizes
