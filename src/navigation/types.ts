export type NavigationParams = {
	navigate: (value: string, item?: any) => void;
	replace: (value?: string, item?: any) => void;
	goBack: (value?: string) => void;
	openDrawer: () => void;
};
