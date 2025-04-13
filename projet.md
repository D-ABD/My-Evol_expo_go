Directory structure:
└── d-abd-my-evol_expo_go.git/
    ├── README.md
    ├── app-env.d.ts
    ├── app.json
    ├── App.tsx
    ├── babel.config.js
    ├── cesconfig.json
    ├── global.css
    ├── metro.config.js
    ├── package.json
    ├── prettier.config.js
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── assets/
    └── components/
        ├── Container.tsx
        ├── EditScreenInfo.tsx
        └── ScreenContent.tsx


Files Content:

================================================
FILE: README.md
================================================
# starter_setup_expo
# My-Evol_expo_go



================================================
FILE: app-env.d.ts
================================================
// @ts-ignore
/// <reference types="nativewind/types" />



================================================
FILE: app.json
================================================
{
  "expo": {
    "name": "my-expo-app",
    "slug": "my-expo-app",
    "version": "1.0.0",

    "web": {
      "favicon": "./assets/favicon.png"
    },

    "experiments": {
      "tsconfigPaths": true
    },

    "plugins": [],

    "orientation": "portrait",
    "icon": "./assets/icon.png",

    "userInterfaceStyle": "light",

    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "supportsTablet": true
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      }
    }
  }
}



================================================
FILE: App.tsx
================================================
import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';

import './global.css';

export default function App() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
}



================================================
FILE: babel.config.js
================================================
module.exports = function (api) {
  api.cache(true);
  const plugins = [];

  return {
    presets: [['babel-preset-expo', { jsxImportSource: 'nativewind' }], 'nativewind/babel'],

    plugins,
  };
};



================================================
FILE: cesconfig.json
================================================
{
  "cesVersion": "2.14.3",
  "projectName": "my-expo-app",
  "packages": [
    {
      "name": "nativewind",
      "type": "styling"
    }
  ],
  "flags": {
    "noGit": false,
    "noInstall": false,
    "overwrite": false,
    "importAlias": true,
    "packageManager": "npm",
    "eas": false,
    "publish": false
  },
  "packageManager": {
    "type": "npm",
    "version": "11.2.0"
  },
  "os": {
    "type": "Darwin",
    "platform": "darwin",
    "arch": "x64",
    "kernelVersion": "21.6.0"
  }
}



================================================
FILE: global.css
================================================
@tailwind base;
@tailwind components;
@tailwind utilities;



================================================
FILE: metro.config.js
================================================
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

// eslint-disable-next-line no-undef
const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './global.css' });



================================================
FILE: package.json
================================================
{
  "name": "my-expo-app",
  "version": "1.0.0",
  "scripts": {
    "android": "expo start --android",
    "ios": "expo start --ios",
    "start": "expo start",
    "prebuild": "expo prebuild",
    "lint": "eslint \"**/*.{js,jsx,ts,tsx}\" && prettier -c \"**/*.{js,jsx,ts,tsx,json}\"",
    "format": "eslint \"**/*.{js,jsx,ts,tsx}\" --fix && prettier \"**/*.{js,jsx,ts,tsx,json}\" --write",
    "web": "expo start --web"
  },
  "dependencies": {
    "expo": "^52.0.44",
    "expo-status-bar": "~2.0.1",
    "nativewind": "latest",
    "react": "18.3.1",
    "react-native": "0.76.9",
    "react-native-reanimated": "3.16.2",
    "react-native-safe-area-context": "4.12.0"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.3.12",
    "@typescript-eslint/eslint-plugin": "^7.7.0",
    "@typescript-eslint/parser": "^7.7.0",
    "eslint": "^8.57.0",
    "eslint-config-universe": "^12.0.1",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.11",
    "tailwindcss": "^3.4.0",
    "typescript": "~5.3.3"
  },
  "eslintConfig": {
    "extends": "universe/native",
    "root": true
  },
  "main": "node_modules/expo/AppEntry.js",
  "private": true
}



================================================
FILE: prettier.config.js
================================================
module.exports = {
  printWidth: 100,
  tabWidth: 2,
  singleQuote: true,
  bracketSameLine: true,
  trailingComma: 'es5',

  plugins: [require.resolve('prettier-plugin-tailwindcss')],
  tailwindAttributes: ['className'],
};



================================================
FILE: tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {},
  },
  plugins: [],
};



================================================
FILE: tsconfig.json
================================================
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",

    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  }
}




================================================
FILE: components/Container.tsx
================================================
import { SafeAreaView } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <SafeAreaView className={styles.container}>{children}</SafeAreaView>;
};

const styles = {
  container: 'flex flex-1 m-6',
};



================================================
FILE: components/EditScreenInfo.tsx
================================================
import { Text, View } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <View className={styles.codeHighlightContainer + styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>
        <Text className={styles.getStartedText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};



================================================
FILE: components/ScreenContent.tsx
================================================
import { Text, View } from 'react-native';

import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <View className={styles.container}>
      <Text className={styles.title}>{title}</Text>
      <View className={styles.separator} />
      <EditScreenInfo path={path} />
      {children}
    </View>
  );
};
const styles = {
  container: `items-center flex-1 justify-center`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold`,
};


