import React, { useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import "fontsource-open-sans"

//HIGHER ORDER COMPONENTS
import WithAuth from './hoc/withAuth'

// ACTION CREATORS
import { setCurrentUser } from './redux/user/user.actions'

// FIREBASE 
import { auth, handleUserProfile } from './firebase/utils'

// LAYOUTS
import MainLayout from './Layouts/Mainlayout'

// PAGES
import Homepage from './pages/Homepage'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Recovery from './pages/Recovery'
import Dashboard from './pages/Dashboard'

const App = ({ currentUser, setCurrentUser }) => {

  useEffect(() => {

    const authListener = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){ 
        const userRef = await handleUserProfile(userAuth)
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
            ...userAuth
          })
        })

      }

      setCurrentUser(userAuth)
      
    })

    return () => {
      authListener()
    }

  },[])


    return (
      <div className="App">

        <Switch>
            <Route exact path="/" render={() => (
              <MainLayout>
                <Homepage />
              </MainLayout>
            )} />
            <Route exact path="/registration"
              render={() => (
              <MainLayout>
                <Registration />
              </MainLayout>
            )} />
            <Route exact path="/login" 
              render={() => (
                <MainLayout>
                  <Login />
                </MainLayout>
            )} />
            <Route exact path="/recovery" 
             render={() => (
               <MainLayout>
                 <Recovery />
               </MainLayout>
             )}
            />
            <Route exact path="/dashboard" 
             render={() => (
               <WithAuth>
                 <MainLayout>
                    <Dashboard />
                 </MainLayout>
               </WithAuth>
               
             )}
            />
        </Switch>

      </div>
    )
  
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps )(App)
