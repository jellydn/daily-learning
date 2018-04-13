import React from 'react'

const UserCard = ({ name, username, company, website }) => {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='media'>
          <div className='media-left'>
            <figure className='image is-48x48'>
              <img
                src='https://bulma.io/images/placeholders/96x96.png'
                alt='Placeholder image'
              />
            </figure>
          </div>
          <div className='media-content'>
            <p className='title is-4'>{name}</p>
            <p className='subtitle is-6'>{username}</p>
          </div>
        </div>

        <div className='content'>
          {company.catchPhrase}
          <br />
          <a href={`http://${website}`}>{company.name}</a>
        </div>
      </div>
    </div>
  )
}

export default UserCard
