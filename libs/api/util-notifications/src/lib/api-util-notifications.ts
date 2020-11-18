export function apiUtilNotifications(): string {
  return 'api-util-notifications';
}

export function sendNotifications(clientId: string): void {
  console.log('sending notification to client: ', clientId);
}
