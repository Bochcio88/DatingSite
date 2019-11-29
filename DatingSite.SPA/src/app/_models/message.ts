export interface Message {
    id: number;
    senderId: string;
    senderUsername: string;
    senderPhotoUrl: string;
    recipientId: number;
    recipientUsername: string;
    recipientPhotoUrl: string;
    content: string;
    isRead: boolean;
    dataRead: Date;
    dateSent: Date;
}
