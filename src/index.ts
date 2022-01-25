/**
 * Simple Implenetation of a Queue
 */
export class SimpleQ<ItemType> {
    itemCount: number;
    queue: ItemType[];

    constructor(){
        this.itemCount = 0;
        this.queue = [];
    }

    /**
     * Adds a new item to queue and updates itemCount to new length of queue
     * @param item added to queue
     */
    add(item: ItemType): void {
        this.itemCount = this.queue.push(item);
    }

    /**
     * Removes appropriate item from queue
     * @returns removed item or null if queue is empty
     */
    remove(): ItemType | null {
        let tmp = this.queue.shift();
        if(tmp === undefined) 
            return null;
        else return tmp;
    }

    /**
     * Checks if queue is empty
     * @returns true if queue is empty, else false
     */
    isEmpty(): boolean {
        if(this.queue.length === 0) 
            return true;
        else return false;
    }

    /**
     * @see add()
     * @param item 
     */
    enqueue(item: ItemType): void {
        this.add(item);
    }

    /**
     * @see remove()
     * @returns 
     */
    dequeue(): ItemType | null {
        return this.remove();
    }
}