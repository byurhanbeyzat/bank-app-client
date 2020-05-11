/* eslint-disable */
import React from 'react'

import { formatMoney } from 'util/index'

import './styles.scss'

export const AccountCard = ({ node, onClick }) => (
  <a className="a-card" role="button" onClick={onClick}>
    <div className="card-details">
      <p>{node.accountType}</p>
      <p>
        {node.currency} {formatMoney(node.balance)}
      </p>
    </div>
    <div className="card-id">
      <p>{node.IBAN}</p>
    </div>
  </a>
)
