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
    ├── nativewind-env.d.ts
    ├── package.json
    ├── prettier.config.js
    ├── projet.md
    ├── tailwind.config.js
    ├── tsconfig.json
    ├── assets/
    ├── components/
    │   ├── BadgeCard.tsx
    │   ├── ChallengeCard.tsx
    │   ├── Dashboard.tsx
    │   ├── Gamification.tsx
    │   ├── Journal.tsx
    │   ├── MyEvolApp.tsx
    │   ├── Objectives.tsx
    │   ├── Parametres.tsx
    │   ├── Stats.tsx
    │   ├── UserProfile.tsx
    │   └── ui/
    │       └── Card.tsx
    ├── constants/
    │   ├── badges.ts
    │   ├── categories.ts
    │   ├── challenges.ts
    │   ├── colors.ts
    │   ├── icons.ts
    │   ├── messages.ts
    │   ├── objectives.ts
    │   └── settings.ts
    ├── hooks/
    │   ├── useCategories.ts
    │   ├── useInitData.ts
    │   ├── useJournal.ts
    │   ├── useObjectives.ts
    │   ├── useSettings.ts
    │   └── useStats.ts
    ├── types/
    │   └── types.ts
    └── utils/
        ├── shadow.ts
        ├── stats.ts
        └── storage.ts


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
// App.tsx
import { LogBox, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import MyEvolApp from './components/MyEvolApp';
import './global.css';

export default function App() {
  return (
    <SafeAreaProvider>
      <MyEvolApp />
      <Toast /> {/* ✅ Ajouté ici, dans le JSX */}
    </SafeAreaProvider>
  );
}

if (Platform.OS === 'web') {
  LogBox.ignoreLogs(['shadow* style props are deprecated', 'props.pointerEvents is deprecated']);
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
// metro.config.js
/* eslint-env node */
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: './global.css',
});



================================================
FILE: nativewind-env.d.ts
================================================
/// <reference types="nativewind/types" />

// NOTE: This file should not be edited and should be committed with your source code. It is generated by NativeWind.



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
    "@react-native-async-storage/async-storage": "1.23.1",
    "expo": "~52.0.46",
    "expo-av": "~15.0.2",
    "expo-status-bar": "~2.0.1",
    "lottie-ios": "^4.5.1",
    "lottie-react-native": "7.1.0",
    "lucide-react-native": "^0.488.0",
    "nativewind": "^4.1.23",
    "react": "18.3.1",
    "react-native": "0.76.9",
    "react-native-chart-kit": "^6.12.0",
    "react-native-pie-chart": "^4.0.1",
    "react-native-reanimated": "3.16.2",
    "react-native-safe-area-context": "4.12.0",
    "react-native-svg": "15.8.0",
    "react-native-toast-message": "^2.2.1",
    "react-native-web": "~0.19.13",
    "victory-native": "^41.16.2"
  },
  "devDependencies": {
    "@babel/core": "^7.20.0",
    "@types/react": "~18.3.12",
    "@types/recharts": "^1.8.29",
    "@typescript-eslint/eslint-plugin": "^7.7.0",
    "@typescript-eslint/parser": "^7.7.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^8.57.0",
    "eslint-config-universe": "^12.0.1",
    "postcss": "^8.5.3",
    "prettier": "^3.2.5",
    "prettier-plugin-tailwindcss": "^0.5.11",
    "tailwindcss": "^3.4.17",
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
FILE: projet.md
================================================
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





================================================
FILE: tailwind.config.js
================================================
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: 'class', // 👈 ici
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
  "compilerOptions": {
    "strict": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "~/*": ["src/*"]
    }
  },
  "extends": "expo/tsconfig.base"
}




================================================
FILE: components/BadgeCard.tsx
================================================
import React from 'react';
import { View, Text, Image } from 'react-native';

import { Badge } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

type Props = {
  badge: Badge;
};

const BadgeCard = ({ badge }: Props) => {
  const borderColor = badge.unlocked ? COLORS.purple : COLORS.grayLight;
  const backgroundColor = badge.unlocked ? COLORS.white : undefined;
  const textColor = badge.unlocked ? 'text-purple-600' : 'dark:text-white';

  return (
    <Card style={{ borderColor, borderWidth: 1, backgroundColor }}>
      <View className="flex-row items-center space-x-4">
        <Image
          source={{ uri: badge.icon }}
          style={{ width: 40, height: 40 }}
          className="rounded-full"
        />
        <View className="flex-1">
          <Text className={`text-base font-semibold ${textColor}`}>{badge.name}</Text>
          <Text className="text-sm text-gray-500 dark:text-gray-300">{badge.description}</Text>
          {badge.unlocked && badge.date && (
            <Text className="mt-1 text-xs" style={{ color: COLORS.green }}>
              Débloqué le {badge.date}
            </Text>
          )}
        </View>
      </View>
    </Card>
  );
};

export default BadgeCard;



================================================
FILE: components/ChallengeCard.tsx
================================================
import React from 'react';
import { View, Text, Pressable } from 'react-native';

import { Challenge } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

type Props = {
  challenge: Challenge;
  onJoin?: (id: number) => void;
};

const ChallengeCard = ({ challenge, onJoin }: Props) => {
  const { id, title, description, progress, totalDays } = challenge;
  const percentage = Math.round((progress / totalDays) * 100);

  return (
    <Card style={{ marginBottom: 16 }}>
      {/* 🏷️ Titre et bouton */}
      <View className="mb-2 flex-row items-center justify-between">
        <Text className="text-base font-semibold dark:text-white">{title}</Text>
        {onJoin && (
          <Pressable
            onPress={() => onJoin(id)}
            style={{
              backgroundColor: COLORS.purple,
              paddingHorizontal: 16,
              paddingVertical: 6,
              borderRadius: 999,
            }}>
            <Text style={{ color: COLORS.white, fontSize: 14, fontWeight: '500' }}>Rejoindre</Text>
          </Pressable>
        )}
      </View>

      {/* 📝 Description */}
      <Text className="text-sm text-gray-500 dark:text-gray-300">{description}</Text>

      {/* 📊 Barre de progression */}
      <View className="mt-3">
        <View className="flex-row justify-between">
          <Text className="text-xs text-gray-500 dark:text-gray-400">
            {progress}/{totalDays} jours
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">{percentage}%</Text>
        </View>

        <View
          className="mt-1 h-2 w-full rounded-full"
          style={{ backgroundColor: COLORS.grayLight }}>
          <View
            className="h-2 rounded-full"
            style={{
              width: `${percentage}%`,
              backgroundColor: COLORS.purple,
            }}
          />
        </View>
      </View>
    </Card>
  );
};

export default ChallengeCard;



================================================
FILE: components/Dashboard.tsx
================================================
import React from 'react';
import { View, Text } from 'react-native';

import Card from './ui/Card';
import { COLORS } from '../constants/colors';
import { DashboardProps } from '../types/types';

const Dashboard: React.FC<DashboardProps> = ({ stats, objectives, badges }) => {
  const moodData = stats.moodData ?? [];
  const moodAvg =
    moodData.length > 0 ? (moodData.reduce((a, b) => a + b, 0) / moodData.length).toFixed(1) : '—';

  const unlockedBadgesCount = badges.filter((b) => b.unlocked).length;

  return (
    <View className="p-4">
      {/* 🏠 Titre */}
      <Text className="mb-4 text-xl font-bold dark:text-white" style={{ color: COLORS.purple }}>
        🏠 Tableau de bord
      </Text>

      {/* 📊 Résumé du jour */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">Résumé du jour</Text>
        <Text style={{ color: COLORS.grayDark }} className="dark:text-gray-300">
          😄 Humeur moyenne : {moodAvg}/10
        </Text>
        <Text style={{ color: COLORS.grayDark }} className="dark:text-gray-300">
          ✍️ Entrées aujourd’hui : {stats.todayEntries}
        </Text>

        {/* 📈 Graphique humeur */}
        {moodData.length > 0 && (
          <View className="mt-4 h-28">
            <View className="absolute h-full w-full justify-between">
              {[0, 1, 2, 3, 4].map((i) => (
                <View
                  key={i}
                  style={{ backgroundColor: COLORS.grayLight }}
                  className="h-px w-full dark:bg-gray-700"
                />
              ))}
            </View>
            <View className="h-full flex-row items-end justify-between">
              {moodData.map((value, index) => (
                <View
                  key={index}
                  className="mx-0.5 w-6 rounded-t-md"
                  style={{
                    height: `${(value / 10) * 100}%`,
                    backgroundColor: COLORS.purple,
                  }}
                />
              ))}
            </View>
            <View className="mt-1 flex-row justify-between">
              {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
                <Text key={day} className="text-xs text-gray-500 dark:text-gray-400">
                  {day}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Card>

      {/* 🎯 Objectifs */}
      <Card style={{ marginBottom: 16 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Objectifs</Text>
        {objectives.length === 0 ? (
          <Text className="text-gray-500 dark:text-gray-400">Aucun objectif pour l’instant.</Text>
        ) : (
          objectives.map((obj) => (
            <View key={obj.id} className="mb-2">
              <View className="flex-row justify-between">
                <Text className="text-sm font-medium dark:text-white">{obj.category}</Text>
                <Text className="text-sm text-gray-500 dark:text-gray-400">
                  {obj.current}/{obj.target}
                </Text>
              </View>
              <View
                className="mt-1 h-2 w-full rounded-full"
                style={{ backgroundColor: COLORS.grayLight }}>
                <View
                  className="h-2 rounded-full"
                  style={{
                    width: `${obj.percentage}%`,
                    backgroundColor: COLORS.purple,
                  }}
                />
              </View>
            </View>
          ))
        )}
      </Card>

      {/* 🏅 Progression */}
      <Card>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🏅 Progression</Text>
        <Text style={{ color: COLORS.grayDark }} className="dark:text-gray-300">
          ⭐ Niveau actuel : {stats.level}
        </Text>
        <Text style={{ color: COLORS.grayDark }} className="dark:text-gray-300">
          🔥 Série : {stats.currentStreak} jours
        </Text>
        <Text style={{ color: COLORS.grayDark }} className="dark:text-gray-300">
          🎖️ Badges débloqués : {unlockedBadgesCount}
        </Text>
      </Card>
    </View>
  );
};

export default Dashboard;



================================================
FILE: components/Gamification.tsx
================================================
import React, { useState } from 'react';
import { Text, ScrollView, Alert } from 'react-native';

import BadgeCard from './BadgeCard';
import ChallengeCard from './ChallengeCard';
import Card from './ui/Card';
import { DEFAULT_BADGES } from '../constants/badges';
import { DEFAULT_CHALLENGES } from '../constants/challenges';
import { COLORS } from '../constants/colors';
import { Badge, Challenge } from '../types/types';

const Gamification: React.FC = () => {
  const [challenges, setChallenges] = useState<Challenge[]>(DEFAULT_CHALLENGES);
  const badges: Badge[] = DEFAULT_BADGES;

  const handleJoinChallenge = (id: number) => {
    setChallenges((prev) =>
      prev.map((challenge) =>
        challenge.id === id
          ? { ...challenge, progress: Math.min(challenge.progress + 1, challenge.totalDays) }
          : challenge
      )
    );

    Alert.alert('Défi rejoint 🎯', 'Vous avez progressé dans ce défi !');
  };

  return (
    <ScrollView className="p-4">
      {/* 🕹️ Titre */}
      <Text className="mb-4 text-xl font-bold dark:text-white" style={{ color: COLORS.pink }}>
        Gamification
      </Text>

      {/* 🎯 Défis en cours */}
      <Card style={{ marginBottom: 24 }}>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🎯 Défis en cours</Text>
        {challenges.length === 0 ? (
          <Text className="text-gray-500 dark:text-gray-400">Aucun défi pour le moment.</Text>
        ) : (
          challenges.map((challenge) => (
            <ChallengeCard key={challenge.id} challenge={challenge} onJoin={handleJoinChallenge} />
          ))
        )}
      </Card>

      {/* 🏅 Badges débloqués */}
      <Card>
        <Text className="mb-2 text-lg font-semibold dark:text-white">🏅 Badges débloqués</Text>
        {badges.length === 0 ? (
          <Text className="text-gray-500 dark:text-gray-400">
            Aucun badge débloqué pour l’instant.
          </Text>
        ) : (
          badges.map((badge) => <BadgeCard key={badge.id} badge={badge} />)
        )}
      </Card>
    </ScrollView>
  );
};

export default Gamification;



================================================
FILE: components/Journal.tsx
================================================
import { Mic, Trash2 } from 'lucide-react-native';
import { View, Text, TextInput, ScrollView, Pressable } from 'react-native';

import Card from './ui/Card';
import { CATEGORIES } from '../constants/categories';
import { COLORS } from '../constants/colors';
import { JournalTabProps } from '../types/types';

type JournalEntryProps = {
  entry: {
    id: number;
    category: string;
    content: string;
    mood: number;
  };
  onDelete: (id: number) => void;
};

const JournalEntry = ({ entry, onDelete }: JournalEntryProps) => {
  return (
    <Card style={{ marginBottom: 8 }}>
      <View className="mb-1 flex-row items-center justify-between">
        <Text style={{ color: COLORS.purple }}>{entry.category}</Text>
        <Pressable onPress={() => onDelete(entry.id)}>
          <Trash2 size={18} color={COLORS.red} />
        </Pressable>
      </View>
      <Text className="text-gray-800 dark:text-white">{entry.content}</Text>
      <Text className="mt-1 text-sm text-gray-500 dark:text-gray-400">
        Humeur : {entry.mood}/10
      </Text>
    </Card>
  );
};

const Journal = ({
  newEntry,
  setNewEntry,
  mood,
  setMood,
  isRecording,
  setIsRecording,
  handleAddEntry,
  handleDeleteEntry,
  entries,
  selectedCategory,
  setSelectedCategory,
}: JournalTabProps) => {
  return (
    <ScrollView className="p-4">
      {/* 📝 Formulaire d’entrée */}
      <Card style={{ marginBottom: 16 }}>
        <TextInput
          placeholder="Qu'avez-vous accompli aujourd'hui ?"
          value={newEntry}
          onChangeText={setNewEntry}
          multiline
          className="h-28 rounded-lg border p-3 text-base text-black dark:text-white"
        />

        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">Catégorie</Text>
        <View className="mt-2 flex-row flex-wrap">
          {CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <Pressable
                key={category}
                onPress={() => setSelectedCategory(category)}
                className={`mb-2 mr-2 rounded-full px-3 py-1 ${
                  isSelected ? 'bg-purple-600' : 'bg-gray-200 dark:bg-gray-700'
                }`}>
                <Text
                  className={`${isSelected ? 'text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                  {category}
                </Text>
              </Pressable>
            );
          })}
        </View>

        <Text className="mt-4 font-medium text-gray-700 dark:text-gray-300">
          Humeur (1–10) : {mood}
        </Text>
        <TextInput
          keyboardType="numeric"
          value={String(mood)}
          onChangeText={(text) => setMood(Number(text))}
          className="mt-1 rounded-lg border p-2 text-black dark:text-white"
        />

        <View className="mt-4 flex-row items-center justify-between">
          <Pressable
            onPress={() => setIsRecording(!isRecording)}
            className={`rounded-full p-2 ${
              isRecording ? 'bg-red-100' : 'bg-gray-100 dark:bg-gray-700'
            }`}>
            <Mic color={isRecording ? COLORS.red : COLORS.white} />
          </Pressable>

          <Pressable
            onPress={handleAddEntry}
            className={`rounded-lg bg-purple-600 px-4 py-2 ${!newEntry.trim() ? 'opacity-50' : ''}`}
            disabled={!newEntry.trim()}>
            <Text className="font-semibold text-white">Enregistrer</Text>
          </Pressable>
        </View>
      </Card>

      {/* 📜 Liste des entrées */}
      <Text className="mb-2 text-lg font-semibold dark:text-white">Vos entrées</Text>
      {entries.length === 0 ? (
        <Card>
          <Text className="text-center text-gray-500 dark:text-gray-400">
            Aucune entrée pour le moment.{'\n'}Commencez à journaliser vos accomplissements !
          </Text>
        </Card>
      ) : (
        entries.map((entry) => (
          <JournalEntry key={entry.id} entry={entry} onDelete={handleDeleteEntry} />
        ))
      )}
    </ScrollView>
  );
};

export default Journal;



================================================
FILE: components/MyEvolApp.tsx
================================================
import { Book, BarChart2, Target, Trophy, Settings, User } from 'lucide-react-native';
import { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Toast from 'react-native-toast-message';

import '../global.css';

import Dashboard from './Dashboard';
import Gamification from './Gamification';
import Objectives from './Objectives';
import Parametres from './Parametres';
import Stats from './Stats';
import Journal from './journal';
import Card from './ui/Card';
import { CATEGORIES, Category } from '../constants/categories';
import { COLORS } from '../constants/colors';
import { useInitData } from '../hooks/useInitData';
import { useJournal } from '../hooks/useJournal';
import { useSettings } from '../hooks/useSettings';
import { useStats } from '../hooks/useStats';
import { Badge } from '../types/types';

export default function MyEvolApp() {
  const [activeTab, setActiveTab] = useState<
    'Dashboard' | 'Journal' | 'Stats' | 'Objectifs' | 'Gamification' | 'Paramètres'
  >('Dashboard');

  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const [badges, setBadges] = useState<Badge[]>([]);

  // 🌙 Paramètres utilisateur
  const { darkMode, setDarkMode, notifications, setNotifications, quietHours } = useSettings();

  // 📊 Statistiques globales
  const { stats, setStats } = useStats();

  // 🎯 Objectifs + Badges (initialisation)
  const { objectives } = useInitData(selectedCategory, setBadges, setStats, stats);
  const { objectives: allObjectives, handleAddObjective, updateObjectives } = objectives;

  // 📘 Journal (notes, humeur, catégorie)
  const {
    entries,
    newEntry,
    setNewEntry,
    mood,
    setMood,
    isRecording,
    setIsRecording,
    handleAddEntry,
    handleDeleteEntry,
  } = useJournal(selectedCategory, setStats, stats);

  const renderTab = () => {
    switch (activeTab) {
      case 'Dashboard':
        return <Dashboard stats={stats} objectives={allObjectives} badges={badges} />;
      case 'Journal':
        return (
          <Journal
            entries={entries}
            newEntry={newEntry}
            setNewEntry={setNewEntry}
            mood={mood}
            setMood={setMood}
            isRecording={isRecording}
            setIsRecording={setIsRecording}
            handleAddEntry={handleAddEntry}
            handleDeleteEntry={handleDeleteEntry}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        );
      case 'Stats':
        return <Stats stats={stats} />;
      case 'Objectifs':
        return (
          <Objectives
            objectives={allObjectives}
            handleAddObjective={handleAddObjective}
            updateObjectives={updateObjectives}
          />
        );
      case 'Gamification':
        return <Gamification />;
      case 'Paramètres':
        return (
          <Parametres
            darkMode={darkMode}
            setDarkMode={setDarkMode}
            notifications={notifications}
            setNotifications={setNotifications}
            quietHours={quietHours}
          />
        );
      default:
        return null;
    }
  };

  const tabs = [
    { name: 'Dashboard', icon: BarChart2 },
    { name: 'Journal', icon: Book },
    { name: 'Stats', icon: BarChart2 },
    { name: 'Objectifs', icon: Target },
    { name: 'Gamification', icon: Trophy },
    { name: 'Paramètres', icon: Settings },
  ];

  return (
    <>
      <SafeAreaView className={`flex-1 ${darkMode ? 'dark' : ''} bg-gray-100 dark:bg-black`}>
        {/* 🔝 En-tête */}
        <Card style={{ margin: 0, borderRadius: 0 }}>
          <View className="flex-row items-center justify-between">
            <Text style={{ color: COLORS.purple }} className="text-xl font-bold dark:text-white">
              MyEvol
            </Text>
            <View className="flex-row items-center space-x-3">
              <Text style={{ color: COLORS.purple }} className="dark:text-white">
                ⭐ Niveau {stats.level}
              </Text>
              <Text style={{ color: COLORS.purple }} className="dark:text-white">
                🔥 {stats.currentStreak} jours
              </Text>
              <User color={COLORS.purple} />
            </View>
          </View>
        </Card>

        {/* 🧠 Contenu dynamique */}
        <View className="flex-1">{renderTab()}</View>

        {/* 🚀 Navigation */}
        <View className="flex-row justify-around border-t bg-white py-3 dark:bg-neutral-900">
          {tabs.map(({ name, icon: Icon }) => (
            <Pressable
              key={name}
              onPress={() => setActiveTab(name as any)}
              className="items-center">
              <Icon color={activeTab === name ? COLORS.purple : COLORS.grayDark} />
              <Text
                className={`text-xs dark:text-white ${
                  activeTab === name ? 'text-purple-600' : 'text-gray-500'
                }`}>
                {name}
              </Text>
            </Pressable>
          ))}
        </View>
      </SafeAreaView>

      <Toast />
    </>
  );
}



================================================
FILE: components/Objectives.tsx
================================================
import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Pressable } from 'react-native';

import { CATEGORIES, Category } from '../constants/categories';
import { Objective, ObjectivesTabProps } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

const Objectives = ({ objectives, handleAddObjective, updateObjectives }: ObjectivesTabProps) => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);
  const [newTarget, setNewTarget] = useState('');

  const handleAdd = () => {
    if (!selectedCategory || !newTarget.trim()) return;

    const newObj: Objective = {
      id: Date.now(),
      category: selectedCategory,
      target: Number(newTarget),
      current: 0,
      percentage: 0,
    };

    handleAddObjective?.(newObj);
    setNewTarget('');
  };

  return (
    <ScrollView className="p-4">
      <Text style={{ color: COLORS.purple }} className="mb-4 text-xl font-bold">
        🎯 Objectifs
      </Text>

      {/* Formulaire d’ajout */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.black }} className="mb-2 text-base font-medium">
          Ajouter un objectif
        </Text>

        {/* Menu Catégorie */}
        <Text className="mb-1 text-white">Catégorie</Text>
        <View className="mb-2 flex-row flex-wrap">
          {CATEGORIES.map((cat) => (
            <Pressable
              key={cat}
              onPress={() => setSelectedCategory(cat)}
              className={`mb-2 mr-2 rounded-full px-3 py-1 ${
                selectedCategory === cat ? 'bg-purple-600' : 'bg-gray-300 dark:bg-gray-700'
              }`}>
              <Text
                className={`text-sm ${
                  selectedCategory === cat ? 'text-white' : 'text-black dark:text-white'
                }`}>
                {cat}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Input Objectif */}
        <TextInput
          placeholder="Objectif (ex: 5)"
          value={newTarget}
          onChangeText={setNewTarget}
          keyboardType="numeric"
          className="mb-2 rounded-lg border p-2 text-black dark:text-white"
        />

        <Pressable
          onPress={handleAdd}
          className={`rounded-lg px-4 py-2 ${
            !selectedCategory || !newTarget.trim() ? 'bg-gray-400 opacity-50' : 'bg-purple-600'
          }`}
          disabled={!selectedCategory || !newTarget.trim()}>
          <Text style={{ color: COLORS.black }} className="text-center font-semibold">
            Ajouter
          </Text>
        </Pressable>
      </Card>

      {/* Liste des objectifs */}
      {objectives.map((obj) => (
        <Card key={obj.id} className="mb-4">
          <View className="mb-2 flex-row justify-between">
            <Text style={{ color: COLORS.black }} className="text-base font-medium">
              {obj.category}
            </Text>
            <Text style={{ color: COLORS.purple }} className="text-sm">
              {obj.current}/{obj.target}
            </Text>
          </View>
          <View
            className="h-3 w-full overflow-hidden rounded-full"
            style={{ backgroundColor: COLORS.grayLight }}>
            <View
              className="h-3 rounded-full"
              style={{
                width: `${obj.percentage}%`,
                backgroundColor: COLORS.purple,
              }}
            />
          </View>
        </Card>
      ))}
    </ScrollView>
  );
};

export default Objectives;



================================================
FILE: components/Parametres.tsx
================================================
import React from 'react';
import { View, Text, Switch } from 'react-native';

import Card from './ui/Card';
import { COLORS } from '../constants/colors';
import { SettingsTabProps } from '../types/types'; // ✅ Types props

const Parametres = ({
  darkMode,
  setDarkMode,
  notifications,
  setNotifications,
  quietHours,
}: SettingsTabProps) => {
  return (
    <View className="space-y-4 p-4">
      {/* Carte : Mode sombre */}
      <Card>
        <View className="flex-row items-center justify-between">
          <Text
            className="text-base font-medium dark:text-white"
            style={{ color: darkMode ? COLORS.white : COLORS.black }}>
            🌙 Mode sombre
          </Text>
          <Switch value={darkMode} onValueChange={setDarkMode} />
        </View>
      </Card>

      {/* Carte : Notifications */}
      <Card>
        <View className="flex-row items-center justify-between">
          <Text
            className="text-base font-medium dark:text-white"
            style={{ color: darkMode ? COLORS.white : COLORS.black }}>
            🔔 Notifications
          </Text>
          <Switch value={notifications} onValueChange={setNotifications} />
        </View>
      </Card>

      {/* Carte : Heures de silence */}
      <Card>
        <Text
          className="mb-1 text-base font-medium dark:text-white"
          style={{ color: darkMode ? COLORS.white : COLORS.black }}>
          🕐 Heures de silence
        </Text>
        <Text
          className="text-gray-600 dark:text-gray-400"
          style={{ color: darkMode ? COLORS.grayDark : COLORS.grayLight }}>
          {quietHours.start} - {quietHours.end}
        </Text>
      </Card>
    </View>
  );
};

export default Parametres;



================================================
FILE: components/Stats.tsx
================================================
import { CATEGORIES, Category } from 'constants/categories';
import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { StatsTabProps } from '../types/types';
import Card from './ui/Card';
import { COLORS } from '../constants/colors';

const Stats = ({ stats }: StatsTabProps) => {
  const moodData = stats.moodData || [5, 6, 7, 6, 8, 7, 9];
  const maxMoodValue = 10;

  const createEmptyCategoryDistribution = (): Record<Category, number> =>
    Object.fromEntries(CATEGORIES.map((cat) => [cat, 0])) as Record<Category, number>;

  const categoryData = {
    ...createEmptyCategoryDistribution(),
    ...(stats.categoryDistribution || {}),
  };
  const maxCategoryValue = Math.max(...Object.values(categoryData));

  return (
    <ScrollView className="p-4">
      {/* Statistiques principales */}
      <View className="mb-4 flex-row justify-between">
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Aujourd'hui</Text>
          <Text style={{ color: COLORS.black }} className="text-2xl font-bold">
            {stats.todayEntries}
          </Text>
        </Card>
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Total</Text>
          <Text style={{ color: COLORS.black }} className="text-2xl font-bold">
            {stats.totalEntries}
          </Text>
        </Card>
      </View>

      {/* Autres infos */}
      <View className="mb-4 flex-row justify-between">
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Série actuelle</Text>
          <Text style={{ color: COLORS.black }} className="text-2xl font-bold">
            {stats.currentStreak} jours
          </Text>
        </Card>
        <Card className="w-[48%]">
          <Text style={{ color: COLORS.grayDark }}>Niveau</Text>
          <Text style={{ color: COLORS.black }} className="text-2xl font-bold">
            {stats.level}
          </Text>
        </Card>
      </View>

      {/* Graphique humeur */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.white }} className="mb-4 text-lg font-semibold">
          Évolution de l'humeur
        </Text>
        <View className="mt-2 h-40">
          <View className="absolute h-full w-full justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <View key={i} style={{ backgroundColor: COLORS.grayLight }} className="h-px w-full" />
            ))}
          </View>
          <View className="h-full flex-row items-end justify-between">
            {moodData.map((value, index) => (
              <View
                key={index}
                className="mx-0.5 w-7 rounded-t-md"
                style={{
                  height: `${(value / maxMoodValue) * 100}%`,
                  backgroundColor: COLORS.purple,
                }}
              />
            ))}
          </View>
        </View>
        <View className="mt-2 flex-row justify-between">
          {['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'].map((day) => (
            <Text key={day} style={{ color: COLORS.grayDark }} className="text-xs">
              {day}
            </Text>
          ))}
        </View>
      </Card>

      {/* Répartition par catégorie */}
      <Card className="mb-4">
        <Text style={{ color: COLORS.white }} className="mb-4 text-lg font-semibold">
          Répartition par catégorie
        </Text>
        {Object.entries(categoryData).map(([category, value], index) => (
          <View key={index} className="mb-3">
            <View className="mb-1 flex-row justify-between">
              <Text style={{ color: COLORS.grayDark }}>{category}</Text>
              <Text style={{ color: COLORS.grayLight }}>{value} entrées</Text>
            </View>
            <View
              className="h-2 rounded-full"
              style={{ backgroundColor: COLORS.grayLight, overflow: 'hidden' }}>
              <View
                className="h-2 rounded-full"
                style={{
                  width: `${(value / maxCategoryValue) * 100}%`,
                  backgroundColor: COLORS.purple,
                }}
              />
            </View>
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};

export default Stats;



================================================
FILE: components/UserProfile.tsx
================================================



================================================
FILE: components/ui/Card.tsx
================================================
import React from 'react';
import { View, ViewProps } from 'react-native';

import { shadowStyle } from '../../utils/shadow';

type CardProps = ViewProps & {
  children: React.ReactNode;
  className?: string;
};

const Card = ({ children, style, className, ...props }: CardProps) => {
  return (
    <View
      className={`rounded-xl bg-white p-4 dark:bg-neutral-900 ${className || ''}`}
      style={[shadowStyle, style]}
      {...props}>
      {children}
    </View>
  );
};

export default Card;



================================================
FILE: constants/badges.ts
================================================
// constants/badges.ts
import { Badge } from '../types/types';

export const DEFAULT_BADGES: Badge[] = [
  {
    id: 1,
    name: 'Premier pas',
    icon: 'https://cdn-icons-png.flaticon.com/512/3909/3909444.png',
    description: 'Créer une première entrée',
    unlocked: true,
    date: '2025-04-14',
  },
  {
    id: 2,
    name: 'Série de 7 jours',
    icon: 'https://cdn-icons-png.flaticon.com/512/888/888879.png',
    description: '7 jours consécutifs',
    unlocked: false,
  },
  {
    id: 3,
    name: 'Objectifs atteints',
    icon: 'https://cdn-icons-png.flaticon.com/512/1828/1828640.png',
    description: 'Atteindre tous ses objectifs hebdos',
    unlocked: false,
  },
  {
    id: 4,
    name: '10 entrées',
    icon: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    description: 'Atteindre 10 entrées de journal',
    unlocked: false,
  },
];



================================================
FILE: constants/categories.ts
================================================
export const CATEGORIES = ['Forme Physique', 'Bien-être Mental', 'Relations', 'Travail'] as const;

export type Category = (typeof CATEGORIES)[number];

// Fonction utilitaire pour générer une distribution vide
export const createEmptyCategoryDistribution = (): Record<Category, number> => {
  return Object.fromEntries(CATEGORIES.map((cat) => [cat, 0])) as Record<Category, number>;
};



================================================
FILE: constants/challenges.ts
================================================
// constants/challenges.ts

import { Challenge } from '../types/types';

export const DEFAULT_CHALLENGES: Challenge[] = [
  {
    id: 1,
    title: 'Défi Gratitude',
    description: 'Notez 3 choses positives chaque jour pendant 5 jours',
    duration: 5,
    progress: 3,
    totalDays: 5,
  },
  {
    id: 2,
    title: 'Objectif Bien-être',
    description: 'Évaluez votre humeur chaque jour pendant 7 jours',
    duration: 7,
    progress: 5,
    totalDays: 7,
  },
];



================================================
FILE: constants/colors.ts
================================================
// constants/colors.ts
export const COLORS = {
  purple: '#9333ea',
  grayLight: '#d1d5db',
  grayDark: '#6b7280',
  green: '#16a34a',
  white: '#ffffff',
  black: '#000000',
  red: '#ef4444',
  pink: '#ec4899',
};



================================================
FILE: constants/icons.ts
================================================



================================================
FILE: constants/messages.ts
================================================
// constants/messages.ts

export const TOAST_MESSAGES = {
  entryAdded: {
    title: 'Bravo 🎉',
    text: 'Une nouvelle réussite a été ajoutée !',
  },
  entryDeleted: {
    title: 'Entrée supprimée ❌',
    text: 'Votre note a été supprimée.',
  },
  challengeJoined: {
    title: 'Défi rejoint 🎯',
    text: 'Vous avez progressé dans ce défi !',
  },
};



================================================
FILE: constants/objectives.ts
================================================
import { CATEGORIES } from './categories';
import { Objective } from '../types/types';

export const DEFAULT_OBJECTIVES: Objective[] = [
  { id: 1, category: CATEGORIES[0], target: 5, current: 2, percentage: 40 },
  { id: 2, category: CATEGORIES[1], target: 3, current: 3, percentage: 100 },
];



================================================
FILE: constants/settings.ts
================================================
// constants/settings.ts

import { QuietHours } from '../types/types';

export const DEFAULT_QUIET_HOURS: QuietHours = {
  start: '22:00',
  end: '07:00',
};

export const DEFAULT_MOOD = 5;
export const DEFAULT_LEVEL = 1;



================================================
FILE: hooks/useCategories.ts
================================================
// hooks/useCategories.ts
import { useState } from 'react';

import { CATEGORIES, Category } from '../constants/categories';

export const useCategories = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>(CATEGORIES[0]);

  return {
    CATEGORIES,
    selectedCategory,
    setSelectedCategory,
  };
};



================================================
FILE: hooks/useInitData.ts
================================================
import { useEffect } from 'react';

import { useJournal } from './useJournal';
import { useObjectives } from './useObjectives';
import { useStats } from './useStats';
import { DEFAULT_BADGES } from '../constants/badges';
import { Category } from '../constants/categories';
import { Badge, Stats } from '../types/types';
import { loadBadges } from '../utils/storage';

type InitHookResult = {
  journal: ReturnType<typeof useJournal>;
  stats: ReturnType<typeof useStats>;
  objectives: ReturnType<typeof useObjectives>;
};

export const useInitData = (
  selectedCategory: Category, // ✅ Ajouté
  setBadges: (badges: Badge[]) => void,
  setStats: (stats: Stats) => void,
  stats: Stats
): InitHookResult => {
  const journal = useJournal(selectedCategory, setStats, stats); // ✅ OK maintenant
  const statsHook = useStats();
  const objectivesHook = useObjectives();

  useEffect(() => {
    const loadAll = async () => {
      await Promise.all([
        journal.initEntries(),
        statsHook.initStats(),
        objectivesHook.initObjectives(),
        loadBadges().then((badges) => {
          if (!badges || badges.length === 0) {
            setBadges(DEFAULT_BADGES);
          } else {
            setBadges(badges);
          }
        }),
      ]);
    };

    loadAll();
  }, []);

  return {
    journal,
    stats: statsHook,
    objectives: objectivesHook,
  };
};



================================================
FILE: hooks/useJournal.ts
================================================
import { useState } from 'react';
import Toast from 'react-native-toast-message';

import { createEmptyCategoryDistribution } from '../constants/categories';
import { DEFAULT_MOOD } from '../constants/settings';
import { Category, Entry, Stats } from '../types/types';
import { saveEntries, loadEntries, saveData } from '../utils/storage';

export const useJournal = (
  selectedCategory: Category,
  setStats: (updated: Stats) => void,
  stats: Stats
) => {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [newEntry, setNewEntry] = useState('');
  const [mood, setMood] = useState(DEFAULT_MOOD);
  const [isRecording, setIsRecording] = useState(false);

  const handleAddEntry = () => {
    if (!newEntry.trim()) return;

    const entry: Entry = {
      id: Date.now(),
      content: newEntry,
      category: selectedCategory,
      date: new Date().toISOString(),
      mood,
    };

    const updatedEntries = [entry, ...entries];
    setEntries(updatedEntries);
    saveEntries(updatedEntries);

    setNewEntry('');
    setMood(DEFAULT_MOOD);

    // Mise à jour des stats
    const updatedDistribution = {
      ...createEmptyCategoryDistribution(),
      ...stats.categoryDistribution,
    };
    updatedDistribution[selectedCategory] = (updatedDistribution[selectedCategory] ?? 0) + 1;

    const total = stats.totalEntries + 1;
    const level = Math.floor(total / 10) + 1;
    const moodHistory = [...(stats.moodData || []), mood].slice(-7);

    const updatedStats: Stats = {
      ...stats,
      todayEntries: stats.todayEntries + 1,
      totalEntries: total,
      currentStreak: stats.currentStreak + 1,
      level,
      moodData: moodHistory,
      categoryDistribution: updatedDistribution,
    };

    setStats(updatedStats);
    saveData('myevol_stats', updatedStats);

    Toast.show({
      type: 'success',
      text1: 'Bravo 🎉',
      text2: 'Une nouvelle réussite a été ajoutée !',
      position: 'top',
    });
  };

  const handleDeleteEntry = (id: number) => {
    const updated = entries.filter((e) => e.id !== id);
    setEntries(updated);
    saveEntries(updated);

    Toast.show({
      type: 'error',
      text1: 'Entrée supprimée ❌',
      text2: 'Votre note a été supprimée.',
      position: 'top',
    });
  };

  const initEntries = async () => {
    const loadedEntries = await loadEntries();
    setEntries(loadedEntries || []);
  };

  return {
    entries,
    newEntry,
    setNewEntry,
    mood,
    setMood,
    isRecording,
    setIsRecording,
    handleAddEntry,
    handleDeleteEntry,
    initEntries,
  };
};



================================================
FILE: hooks/useObjectives.ts
================================================
import { useState } from 'react';

import { DEFAULT_OBJECTIVES } from '../constants/objectives';
import { Objective } from '../types/types';
import { saveObjectives, loadObjectives } from '../utils/storage';

export const useObjectives = () => {
  const [objectives, setObjectives] = useState<Objective[]>([]);

  const handleAddObjective = (newObjective: Objective) => {
    const updated = [...objectives, newObjective];
    setObjectives(updated);
    saveObjectives(updated);
  };

  const updateObjectives = (updated: Objective[]) => {
    setObjectives(updated);
    saveObjectives(updated);
  };

  const initObjectives = async () => {
    const loadedObjectives = await loadObjectives();
    if (!loadedObjectives || loadedObjectives.length === 0) {
      setObjectives(DEFAULT_OBJECTIVES);
      saveObjectives(DEFAULT_OBJECTIVES);
    } else {
      setObjectives(loadedObjectives);
    }
  };

  return {
    objectives,
    setObjectives,
    handleAddObjective,
    updateObjectives,
    initObjectives,
  };
};



================================================
FILE: hooks/useSettings.ts
================================================
import { useState } from 'react';

import { DEFAULT_QUIET_HOURS } from '../constants/settings';
import { QuietHours } from '../types/types';

export const useSettings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [quietHours] = useState<QuietHours>(DEFAULT_QUIET_HOURS);

  return {
    darkMode,
    setDarkMode,
    notifications,
    setNotifications,
    quietHours,
  };
};



================================================
FILE: hooks/useStats.ts
================================================
import { useState } from 'react';

import { createEmptyCategoryDistribution } from '../constants/categories';
import { Stats } from '../types/types';
import { loadData } from '../utils/storage';

export const useStats = () => {
  const [stats, setStats] = useState<Stats>({
    todayEntries: 0,
    totalEntries: 0,
    currentStreak: 0,
    level: 1,
    moodData: [],
    categoryDistribution: createEmptyCategoryDistribution(),
  });

  const initStats = async () => {
    const loadedStats = await loadData<Stats>('myevol_stats');
    if (loadedStats) {
      setStats((prev) => ({
        ...prev,
        ...loadedStats,
        categoryDistribution: {
          ...createEmptyCategoryDistribution(),
          ...(loadedStats.categoryDistribution || {}),
        },
      }));
    }
  };

  return {
    stats,
    setStats,
    initStats,
  };
};



================================================
FILE: types/types.ts
================================================
// Définition des types principaux de l'application MyEvol
import type { Category } from '../constants/categories'; // ✅ import classique (et non plus "type only")
export { Category };

// Type pour les entrées du journal
export type Entry = {
  id: number;
  content: string;
  category: Category;
  date: string;
  mood: number;
};

// Type pour les objectifs
export type Objective = {
  id: number;
  category: Category; // ✅ au lieu de string
  target: number;
  current: number;
  percentage: number;
};

// Type pour les heures de silence des notifications
export type QuietHours = {
  start: string;
  end: string;
};

// Type pour les statistiques
export type Stats = {
  todayEntries: number;
  totalEntries: number;
  currentStreak: number;
  level: number;
  moodData?: number[];
  categoryDistribution?: Record<Category, number>;
};

// Types pour les props des composants
export type JournalTabProps = {
  newEntry: string;
  setNewEntry: (text: string) => void;
  mood: number;
  setMood: (value: number) => void;
  isRecording: boolean;
  setIsRecording: (value: boolean) => void;
  handleAddEntry: () => void;
  handleDeleteEntry: (id: number) => void;
  entries: Entry[];
  selectedCategory: Category;
  setSelectedCategory: (category: Category) => void;
};

export type StatsTabProps = {
  stats: Stats;
};

export type ObjectivesTabProps = {
  objectives: Objective[];
  handleAddObjective?: (newObjective: Objective) => void;
  updateObjectives?: (updated: Objective[]) => void;
};

export type SettingsTabProps = {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  notifications: boolean;
  setNotifications: (value: boolean) => void;
  quietHours: QuietHours;
};

export type Badge = {
  id: number;
  name: string;
  icon: string;
  description: string;
  unlocked: boolean;
  date?: string;
};

export type Challenge = {
  id: number;
  title: string;
  description: string;
  duration: number;
  progress: number;
  totalDays: number;
  participants?: number;
};

export type DashboardProps = {
  stats: Stats;
  objectives: Objective[];
  badges: Badge[];
};



================================================
FILE: utils/shadow.ts
================================================
// utils/shadow.ts
import { Platform } from 'react-native';

export const shadowStyle = Platform.select({
  ios: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  android: {
    elevation: 4,
  },
  web: {
    // ✅ Corrige le warning en remplaçant les "shadow*" par boxShadow
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  },
});



================================================
FILE: utils/stats.ts
================================================
import { Entry } from 'types/types';

export const getEntriesByWeekday = (entries: Entry[]) => {
  const result: { [day: string]: number } = {
    Lun: 0,
    Mar: 0,
    Mer: 0,
    Jeu: 0,
    Ven: 0,
    Sam: 0,
    Dim: 0,
  };
  const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  entries.forEach((entry) => {
    const date = new Date(entry.date);
    const weekday = days[date.getDay()];
    result[weekday] += 1;
  });

  return result;
};



================================================
FILE: utils/storage.ts
================================================
// utils/storage.ts
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Badge, Entry, Objective } from '../types/types';

export const saveEntries = async (entries: Entry[]) => {
  try {
    await AsyncStorage.setItem('myevol_entries', JSON.stringify(entries));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des entrées:', error);
  }
};

export const loadEntries = async (): Promise<Entry[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_entries');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des entrées:', error);
    return [];
  }
};

export const saveData = async (key: string, data: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Erreur lors de la sauvegarde:', e);
  }
};

export const loadData = async <T>(key: string): Promise<T | null> => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Erreur lors du chargement:', e);
    return null;
  }
};
export const saveObjectives = async (objectives: Objective[]) => {
  try {
    await AsyncStorage.setItem('myevol_objectives', JSON.stringify(objectives));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des objectifs:', error);
  }
};

export const loadObjectives = async (): Promise<Objective[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_objectives');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des objectifs:', error);
    return [];
  }
};
export const saveBadges = async (badges: Badge[]) => {
  try {
    await AsyncStorage.setItem('myevol_badges', JSON.stringify(badges));
  } catch (error) {
    console.error('Erreur lors de la sauvegarde des badges:', error);
  }
};

export const loadBadges = async (): Promise<Badge[]> => {
  try {
    const data = await AsyncStorage.getItem('myevol_badges');
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Erreur lors du chargement des badges:', error);
    return [];
  }
};


