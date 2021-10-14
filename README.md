# zadanie-rekrutacyjne - Client

## Sklep Jasia - Zadanie rekrutacyjne 10/2021

#

### Obsługa

```
npm install
npm run dev
listen: http://localhost:3000/
```

### Obsługa v.2 - ważne
Aby aplikacja poprawnie działała proszę o zapoznanie się z repozytorium: [zadanie-rekrutacyjne - Server](http://www.example.com/)

#

### Funkcje podstawowe

- [x] Dodawanie kategori Domy (w polu `typ`: `houses`)
- [x] Dodawanie kategori Zwierzęta (w polu `typ`: `animals`)
- [x] Sortowanie po kolumnach
- [x] Wyszukiwanie po kolumnach
- [x] Zmiana waluty na `PLN`, `USD`, `EUR` (cena, symbol)
- [x] Walidacje przy dodawaniu nowej kategorio

### Funkcje dodatkowe

- [x] RWD - Widok mobilny (iPhone 8 Plus)
- [x] RWD - Widok desktopowy
- [x] `Tab` - focus na wyszukiwarkę
- [x] `Esc` - un focus na wyszukiwarkę

#

### Dane startowe - Domy

- Domy: `Na drzewie`, `Na ziemi`, `Na wodzie`

| Nazwa        | Value  | Type     |
| ------------ | ------ | -------- |
| `Na drzewie` | `0.75` | `houses` |
| `Na ziemi`   | `0.5`  | `houses` |
| `Na wodzie`  | `1`    | `houses` |

- Zwierzęta: `Koty`, `Psy`, `Konie`, `Ptaki`, `Jeże`, `Króliki`, `Kury`, `Lwy`

| Nazwa     | Value  | Type      |
| --------- | ------ | --------- |
| `Koty`    | `200`  | `animals` |
| `Psy`     | `250`  | `animals` |
| `Konie`   | `2000` | `animals` |
| `Ptaki`   | `500`  | `animals` |
| `Jeże`    | `100`  | `animals` |
| `Króliki` | `100`  | `animals` |
| `Kury`    | `200`  | `animals` |
| `Lwy`     | `2000` | `animals` |
