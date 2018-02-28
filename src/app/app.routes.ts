import { HomeComponent } from './home/home.component';

export const appRoutes = [
    {
        path:'home',
        component:HomeComponent
    },
	{
		path: 'userlist',
		loadChildren: './user-list/user-list.module#UserListModule'
	},
	{
		path: '**', // fallback router must in the last
		component: HomeComponent
	}
];
