import styled from 'styled-components'
import Head from 'next/head'
import AmigoContainer from '../../components/AmigoContainer'
import styledNormalize  from 'styled-normalize'

const ProfilePage = () => {
  return (<div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,shrink-to-fit=no" />
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" />
      <style>{`
        ${styledNormalize}
        html, body{
          font-family:‘Helvetica Neue’, ‘Helvetica’, ‘Arial’, ‘PingFang TC’, ‘微软雅黑‘, ‘Microsoft YaHei’, ‘华文细黑‘, ‘STHeiti’, sans-serif;
          background-color:#2F7C90;
        }

      `}</style>

    </Head>
    <AmigoContainer inverseBgColor={true}>
      <ProfileArea>ProfilePage</ProfileArea>
    </AmigoContainer>
  </div>
  )
}
export default ProfilePage

const ProfileArea = styled.div`
  width:20vh;
  display:flex;
  flex-direction:column;
  background-color:papayawhip;
  font-size:10vh;
`
