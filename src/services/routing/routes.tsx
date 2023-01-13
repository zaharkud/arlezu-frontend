import AboutPage from "pages/About/AboutPage";
import AlphabetPage from "pages/Alphabet/AlphabetPage";
import CardRepeaterPage from "pages/CardsRepeater/CardRepeaterPage";
import DictionaryListPage from "pages/DictionaryList/DictionaryListPage";
import DictionaryViewerPage from "pages/DictionaryViewer/DictionaryViewerPage";
import GrammarPage from "pages/Grammar/GrammarPage";
import InstructionPage from "pages/Instruction/InstructionPage";
import LoginPage from "pages/Login/LoginPage";
import MainPage from "pages/Main/MainPage";
import ProfilePage from "pages/Profile/ProfilePage";
import RegistrationPage from "pages/Registration/RegistrationPage";
import SettingsPage from "pages/Settings/SettingsPage";

import {
  ABOUTE_ROUTE,
  ALPHABET_ROUTE,
  CARDS_REPEATER_ROUTE,
  DICTIONARY_LIST_ROUTE,
  DICTIONARY_VIEWER_ROUTE,
  GRAMMAR_ROUTE,
  INSTRUCTION_ROUTE,
  LOGIN_ROUTE,
  PROFILE_ROUTE,
  REGISTRATION_ROUTE,
  SETTINGS_ROUTE,
  MAIN_ROUTE,
} from "services/consts/route.consts";


export const authRoutes = [
  {
    path: CARDS_REPEATER_ROUTE,
    component: <CardRepeaterPage />,
  },
  {
    path: DICTIONARY_LIST_ROUTE,
    component: <DictionaryListPage />,
  },
  {
    path: DICTIONARY_VIEWER_ROUTE,
    component: <DictionaryViewerPage />,
  },
  {
    path: PROFILE_ROUTE,
    component: <ProfilePage />,
  },
  {
    path: SETTINGS_ROUTE,
    component: <SettingsPage />,
  },
];

export const publicRoutes = [
  {
    path: ABOUTE_ROUTE,
    component: <AboutPage />,
  },
  {
    path: ALPHABET_ROUTE,
    component: <AlphabetPage />,
  },
  {
    path: GRAMMAR_ROUTE,
    component: <GrammarPage />,
  },
  {
    path: INSTRUCTION_ROUTE,
    component: <InstructionPage />,
  },
  {
    path: LOGIN_ROUTE,
    component: <LoginPage />,
  },
  {
    path: REGISTRATION_ROUTE,
    component: <RegistrationPage />,
  },
  {
    path: MAIN_ROUTE,
    component: <MainPage />,
  },
];
