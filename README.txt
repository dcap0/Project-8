Before you start
To prepare for this project you'll need to make sure you complete and understand these steps.
 4 steps
    • To prepare for this project you'll need to make sure you complete and understand these steps.
                • Have a GitHub account and know how to create a new repository and upload files to it. As with the previous projects, you'll submit your finished working using GitHub.
                • If you need a reminder on how to use GitHub and GitHub desktop to create a new repository check out the workshop 'Share Your Projects wIth GitHub Desktop' in the Project Resources.
                • Download the project files. We've supplied a project folder containing the following files for you to use:
        ◦ index.html -- the web page for the project
        ◦ images directory -- contains jpg and png images
        ◦ sass directory -- contains various Sass files
        ◦ js directory -- contains a global.js file and a subdirectory -- circle -- with two other helper JavaScript files
        ◦ icons directory -- you can ignore this folder in your build process, but you will need to copy this folder over to the dist directory for the final build
Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question in the community.
 8 steps
                • As a developer, I should be able to run the npm install command to install all of the dependencies for the build process.
                • As a developer, I should be able to run the gulp scripts command at the command line to concatenate, minify, and copy all of the project’s JavaScript files into an all.min.js file that is then copied to the dist/scripts folder.
                • As a developer, I should be able to run the gulp styles command at the command line to compile the project’s SCSS files into CSS, then concatenate and minify into an all.min.css file that is then copied to the dist/stylesfolder.
                • As a developer, when I run the gulp scripts or gulp styles commands at the command line, source maps are generated for the JavaScript and CSS files respectively.
                • As a developer, I should be able to run the gulp images command at the command line to optimize the size of the project’s JPEG and PNG files, and then copy those optimized images to the dist/content folder.
                • As a developer, I should be able to run the gulp clean command at the command line to delete all of the files and folders in the dist folder.
                • As a developer, I should be able to run the gulp build command at the command line to run the clean, scripts, styles, and images tasks with confidence that the clean task completes before the other commands.
                • As a developer, I should be able to run the gulp command at the command line to run the build task and serve my project using a local web server.