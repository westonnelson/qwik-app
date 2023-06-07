import { component$, $, useOnWindow, useSignal } from '@builder.io/qwik';
import styles from './next-steps.module.css';

export const GETTING_STARTED_STEPS = [
  {
    message: "Rev Share",
  },
  {
    message: 'Time to learn about xNFTE',
    hint: 'What do you get when you combine NFTs, Layer2, and a protocol native token for staking?',
  },
  {
    message: '<b>Congratulations!</b> You are now familiar with the basics of NFTEarth Rev Sharing! 🎉',
    hint: "If you need further info on how to use the platform, join the community on Twitter or in in Discord!",
  },
];

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    'keydown',
    $((e) => {
      if ((e as KeyboardEvent).key === 'Alt') {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        Ready for NFTFi and xNFTE?
        <br />
        <span class="highlight">and Rev Share on L2</span>?
      </h2>
      <div class={styles.gettingstarted}>
        <div
          class={styles.intro}
          dangerouslySetInnerHTML={GETTING_STARTED_STEPS[gettingStartedStep.value].message}
        />
        <span
          class={styles.hint}
          dangerouslySetInnerHTML={GETTING_STARTED_STEPS[gettingStartedStep.value].hint}
        />
      </div>
      {gettingStartedStep.value + 1 < GETTING_STARTED_STEPS.length ? (
        <button class="button-dark" onClick$={() => gettingStartedStep.value++}>
          Next step {gettingStartedStep.value + 2} of {GETTING_STARTED_STEPS.length}
        </button>
      ) : (
        <button class="button-dark" onClick$={() => (gettingStartedStep.value = 0)}>
          Re-Start
        </button>
      )}
    </div>
  );
});
