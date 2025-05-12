export interface INavigator {
    setDestination(destination: string): void;
    calculateRoute(): string[]; 
    updateRoute(): void;
}