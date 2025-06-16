export interface HeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  filterFraud: 'all' | 'verified' | 'fraud';
  onFilterChange: (value: 'all' | 'verified' | 'fraud') => void;
}