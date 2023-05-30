import { useState } from 'react';

import { Button } from '@mui/material';
import AdsClickIcon from '@mui/icons-material/AdsClick';

import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { useTranslation } from 'react-i18next';

import './App.css';


function App() {
  const [count, setCount] = useState(0)
  const [click, setClick] = useState<boolean>(false)
  const { t, i18n } = useTranslation();

  const handleClick = () => {
    setCount(count + 1)
    setClick(!click)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Peredelano-Profile({t('app_button.comming_soon')})</h1>
      <div>
        <button onClick={() => changeLanguage("en")}>EN</button>
        <button onClick={() => changeLanguage("ru")}>RU</button>
      </div>
      <div className="card">
        <Button
          variant="contained"
          startIcon={<AdsClickIcon />}
          onClick={handleClick}
          color={(click && 'success') || 'error'}>
          {t('app_button.count')} {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
