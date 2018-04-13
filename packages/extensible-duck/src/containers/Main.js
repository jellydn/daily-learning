import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userDuck } from '../duck'
import UserCard from '../components/UserCard'
import Loading from '../components/Loading'

export class Main extends Component {
  componentDidMount () {
    this.props.fetchUsers()
  }

  render () {
    return (
      <div className='container'>
        <section className='section'>
          <div className='container'>
            <h1 className='title'>User list</h1>
          </div>
          {this.props.users.status === 'LOADING' && <Loading />}
        </section>
        {this.props.users.entities.map(item => (
          <UserCard key={item.id} {...item} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({ ...state })

const mapDispatchToProps = {
  ...userDuck.creators
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)
