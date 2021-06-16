import React from 'react'
import VisibilityIcon from '@material-ui/icons/Visibility';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import { PersonAdd, Settings } from '@material-ui/icons';
export const Menus = [
    {
        id:1,
        name:'Get Reviews',
        icon:<VisibilityIcon color={'secondary'}/>,
        route:'/get_reviews'
    },
    {
        id:2,
        name:'Hot leads',
        icon:<WhatshotIcon color={'secondary'}/>,
        route:'/hot_leads'
    },
    {
        id:3,
        name:'Settings',
        icon:<Settings/>,
        route:'/settings'
    },
    {
        id:4,
        name:'Review access',
        icon:<PersonAdd/>,
        route:'/review_access'
    },
]