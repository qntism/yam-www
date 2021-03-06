import React from 'react'
import {
  Container,
  Spacer,
} from 'react-neu'

import Page from 'components/Page'
import PageHeader from 'components/PageHeader'
import Split from 'components/Split'

import useBalances from 'hooks/useBalances'
import useVesting from 'hooks/useVesting'

import FarmingNotice from './components/FarmingNotice'
import MigrationNotice from './components/MigrationNotice'
import Rebase from './components/Rebase'
import Stats from './components/Stats'
import VestingNotice from './components/VestingNotice'

const Home: React.FC = () => {
  const { yamV2Balance } = useBalances()
  const { vestedBalance } = useVesting()
  return (
    <Page>
      <PageHeader
        icon="🌞"
        subtitle="It's a great day to farm YAMs!"
        title="Welcome to YAM Finance."
      />
      <Container>
        <FarmingNotice />
        <Spacer />
        {(yamV2Balance && yamV2Balance.toNumber() > 0) && (
          <>
            <MigrationNotice />
            <Spacer />
          </>
        )}
        {(vestedBalance && vestedBalance.toNumber() > 0) && (
          <>
            <VestingNotice />
            <Spacer />
          </>
        )}
        <Split>
          <Rebase />
          <Stats />
        </Split>
      </Container>
    </Page>
  )
}

export default Home