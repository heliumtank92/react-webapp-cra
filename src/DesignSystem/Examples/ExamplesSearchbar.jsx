import React, { Component } from 'react'
import DsPaper from '../Components/DsPaper'
import DsSearchbar from '../Components/DsSearchbar'
import DsMenuItem from '../Components/DsMenuItem'
import DsGrid from '../Components/DsGrid'

const options = [
  {
    razorpayBankCode: 'UTIB',
    billdeskBankCode: 'UTI',
    bankName: 'Axis Bank'
  },
  {
    razorpayBankCode: 'SBIN',
    billdeskBankCode: 'SBI',
    bankName: 'State Bank of India'
  },
  {
    razorpayBankCode: 'ICIC',
    billdeskBankCode: 'ICI',
    bankName: 'ICICI Bank'
  },
  {
    razorpayBankCode: 'HDFC',
    billdeskBankCode: 'HDF',
    bankName: 'HDFC Bank'
  },
  {
    razorpayBankCode: 'KKBK',
    billdeskBankCode: '162',
    bankName: 'Kotak Mahindra Bank'
  },
  {
    razorpayBankCode: 'CNRB',
    billdeskBankCode: 'CNB',
    bankName: 'Canara Bank'
  }
]

class ExamplesSearchbar extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search: null,
      search1: null
    }
  }

  handleChange = (name, value) => {
    console.log('ExamplesSearchbar name, value', name, value)
    this.setState({ [name]: value })
  }

  render () {
    return (
      <DsPaper sx={{ p: 'var(--ds-spacing-mild)', backgroundColor: 'inherit' }}>
        <DsGrid container spacing={6}>
          <DsGrid item xs={12} md={6} lg={4}>
            <DsSearchbar
              name='search'
              value={this.state.search}
              onChange={this.handleChange}
              options={options}
              getOptionLabel={(option) => option.bankName}
              renderOption={(props, option) => {
                const { bankName = '', razorpayBankCode = '' } = option
                return (
                  <DsMenuItem {...props} key={razorpayBankCode} value={razorpayBankCode}>
                    <span>{bankName} ({razorpayBankCode})</span>
                  </DsMenuItem>
                )
              }}
            />
          </DsGrid>
          <DsGrid item xs={12} md={6} lg={4}>
            <DsSearchbar
              name='search1'
              placeholder='Free Search'
              freeSolo
              defaultValue=''
              value={this.state.search1}
              onChange={this.handleChange}
            />
          </DsGrid>
        </DsGrid>
      </DsPaper>
    )
  }
}

export default ExamplesSearchbar
