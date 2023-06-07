import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

import Counter from '~/components/starter/counter/counter';
import Hero from '~/components/starter/hero/hero';
import Infobox from '~/components/starter/infobox/infobox';
import Starter from '~/components/starter/next-steps/next-steps';

export default component$(() => {
  return (
    <>
      <Hero />
      <Starter />

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>

      <div class="container container-center container-spacing-xl">
        <h3>
          NFTEarth - have fun playing with this counter component below!
        </h3>
        <Counter />
      </div>

      <div class="container container-flex">
        <Infobox>
          <div q:slot="title" class="icon icon-cli">
            NFT Games, NFTFi, Marketplace
          </div>
          <>
            <p>
              <code>Staking</code>
              <br />
              Earn Rewards for supporting the protocol
            </p>
            <p>
              <code>Gaming</code>
              <br />
              Have fun using web3 on Layer2, where costs are low!
            </p>
            <p>
              <code>Rev Share</code>
              <br />
              NFTEarth is the only DAO with both a flagship NFT - the Earthling and a native token, $NFTE - both of which make up the heart of our Rev Share program
            </p>

          </>
        </Infobox>

        <div>
          <Infobox>
            <div q:slot="title" class="icon icon-apps">
              Live Apps
            </div>
            <p>
              Have a look at the <a href="https://nftearth.exchange">Marketplace</a>
            </p>
          </Infobox>

          <Infobox>
            <div q:slot="title" class="icon icon-community">
              Community
            </div>
            <ul>
              <li>
                <span>Questions or just want to say hi? </span>
                <a href="https://discord.gg/nftearth" target="_blank">
                  Join us in discord!
                </a>
              </li>
              <li>
                <span>Follow </span>
                <a href="https://twitter.com/NFTEarth_L2" target="_blank">
                  @NFTEarth_L2
                </a>
                <span> on Twitter</span>
              </li>
              <li>
                <span>Check out our source code or contribute on </span>
                <a href="https://github.com/NFTEarth_L2" target="_blank">
                  GitHub
                </a>
              </li>
              </ul>
          </Infobox>
        </div>
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Welcome to NFTEarth Rev Share',
  meta: [
    {
      name: 'description',
      content: 'NFTEarth Rev Share',
    },
  ],
};
