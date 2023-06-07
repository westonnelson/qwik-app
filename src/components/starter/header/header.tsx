import { component$ } from '@builder.io/qwik';
import { QwikLogo } from '../icons/qwik';
import styles from './header.module.css';

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class={['container', styles.wrapper]}>
        <div class={styles.logo}>
          <a href="/" title="qwik">
            <QwikLogo height={50} width={143} />
          </a>
        </div>
        <ul>
          <li>
            <a href="https://stake.nftearth.exchange" target="_blank">
              Stake Earthling
            </a>
          </li>
          <li>
            <a href="https://docs.nftearth.exchange" target="_blank">
              Docs
            </a>
          </li>
          <li>
            <a href="https://nftearth.exchange" target="_blank">
              Marketplace
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
});
