#!/bin/bash

# Variables
APP_DIR="/home/wbdev/vivek_webbazaardevelopment_com/react-app"
BUILD_DIR="$APP_DIR/dist"
DEST_DIR="/home/wbdev/vivek_webbazaardevelopment_com"
BRANCH="development"
HTACCESS_CONTENT="<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule ^ index.html [L]
</IfModule>"

# Navigate to the application directory
echo "Navigating to $APP_DIR..."
cd "$APP_DIR" || { echo "Failed to navigate to $APP_DIR. Exiting."; exit 1; }

# Pull the latest changes from the development branch
echo "Pulling latest changes from branch '$BRANCH'..."
git pull origin "$BRANCH"
if [ $? -ne 0 ]; then
    echo "Git pull failed. Exiting."
    exit 1
fi
echo "Git pull completed successfully."

# Run npm install
echo "Running npm install..."
npm install --legacy-peer-deps
if [ $? -ne 0 ]; then
    echo "npm install failed. Exiting."
    exit 1
fi
echo "npm install completed successfully."

# Run npm build
echo "Running npm build..."
npm run build
if [ $? -ne 0 ]; then
    echo "npm build failed. Exiting."
    exit 1
fi
echo "npm build completed successfully."

# Copy the dist folder to the destination directory
echo "Copying dist folder from $BUILD_DIR to $DEST_DIR..."
cp -r "$BUILD_DIR" "$DEST_DIR"
if [ $? -ne 0 ]; then
    echo "Failed to copy the dist folder. Please check the paths. Exiting."
    exit 1
fi
echo "Dist folder copied successfully."

# Create the .htaccess file inside the dist folder
HTACCESS_PATH="$DEST_DIR/dist/.htaccess"
echo "Creating .htaccess file at $HTACCESS_PATH..."
echo "$HTACCESS_CONTENT" > "$HTACCESS_PATH"
if [ $? -ne 0 ]; then
    echo "Failed to create .htaccess file. Exiting."
    exit 1
fi
echo ".htaccess file created successfully."

echo "Git pull, build, and deployment process completed."
