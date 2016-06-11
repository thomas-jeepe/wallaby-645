import * as React from 'react'
import store from './InfoStore'
import { observer } from 'mobx-react'

import Paper from 'material-ui/Paper' 

const styles = require('../../../endpoint/css/DetailPage.css')

export default observer(({ header }: { header: string }) => 
  <Paper className={styles.infoGrid}>
    <h2 className={styles.gridHeader}>{header}</h2>
    <p className={styles.gridText}>{store.text}</p>
  </Paper>
) 
