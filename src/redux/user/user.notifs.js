import { notification } from 'antd'



export const emailSignInNotification = (user) => {
    notification.open({
        style: {
          color: '#1DA57A',
          fontWeight: 'bold',
          opacity: 0.9,
          cursor: 'pointer',
        },
        placement: 'topRight',
        message: 'Signed In!',
        description: ` Welcome back!`,
        duration: 7,
    })
}


export const googleSignInNotification = (user) => {
    notification.open({
        style: {
          color: '#1DA57A',
          fontWeight: 'bold',
          opacity: 0.9,
          cursor: 'pointer',
        },
        placement: 'topRight',
        message: 'Signed In!',
        description: ` Welcome, ${user.displayName}!`,
        duration: 7,
    })
}

export const googleSignOutNotification = () => {
    notification.open({
        style: {
          color: '#FB0039',
          fontWeight: 'bold',
          opacity: 0.9,
          cursor: 'pointer',
        },
        placement: 'topRight',
        message: 'Signed Out!',
        description: `You have signed out!`,
        duration: 7,
    })
}