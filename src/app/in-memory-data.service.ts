import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {
                id: 11,
                name: 'Captain America',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAdvrHsTmnNVRV802D7sNLyMi9RFcRRTL_q8GcnzemiblyWwno'
            },
            {
                id: 12,
                name: 'Iron Man',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn_RGmtDR3n8XIRUvzipQhRvt5Tdq6IMZINVLXeUv2aAWdhto0'
            },
            {
                id: 13,
                name: 'Spider Man',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuqj5taKStXqhzFhalHFDM4RuNkUV9XqkYtZKIbunNf89auKuE'
            },
            {
                id: 14,
                name: 'Black Panther',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgkVVrZWjUz5fY_duf47HXABzbRnDcT8xon158aL2d4sEI0Gwoyg'
            },
            {
                id: 15,
                name: 'Doctor Strange',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ-2BpwKBI7eFUXHtX_QSk9RapM5gIKve3JAwfI7j0V4XGZfph'
            },
            {
                id: 16,
                name: 'Hulk',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR50PN4nPGQiCqUwu2Ld_KZk5dWrVlTooimJj-pmwSv6zLMUTByMA'
            },
            {
                id: 17,
                name: 'Thor',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReLuMZCyJuc6AfEjRTm38b9MKvNGtlsnnmMsVCgcSJsNYBAhn8Vw'
            },
            {
                id: 18,
                name: 'Ant Man',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdX8i6hRgl2jPVChfqYSjSZ2U_neB4vGGknhqKV2GUXiSTBAGtA'
            },
            {
                id: 19,
                name: 'DeadPool',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOXmMjIvjHWZBm3mO4aEhcCFwamo7k9F647VO-E1rlhLx-4be_lQ'
            },
            {
                id: 20,
                name: 'Wolverine',
                img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJSa0gmWtWoxX0TPrXbdHmKl7ljOgmfKEL8qrHZnDfH2uXBlbm'
            }
        ];
        return {heroes};
    }

    // Overrides the genId method to ensure that a hero always has an id.
    // If the heroes array is empty,
    // the method below returns the initial number (11).
    // if the heroes array is not empty, the method below returns the highest
    // hero id + 1.
    genId(heroes: Hero[]): number {
        return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
    }
}
