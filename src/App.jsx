import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import RuleList from "./components/RuleList";
import CategoryFilter from "./components/CategoryFilter";
import ComplianceCounter from "./components/ComplianceCounter";
import Footer from "./components/Footer";

import { rulesData } from "./data/rules";

export default function App() {
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [completedRules, setCompletedRules] = useState({});

  const handleCompliant = (id, state) => {
    setCompletedRules((prev) => ({ ...prev, [id]: state }));
  };

  const filteredRules = rulesData.filter(rule => {
    const text = searchText.toLowerCase();
    const matchesText =
      rule.title.toLowerCase().includes(text) ||
      rule.category.toLowerCase().includes(text);

    const matchesCategory = category === "" || rule.category === category;

    return matchesText && matchesCategory;
  });

  const completedCount = Object.values(completedRules).filter(Boolean).length;

  return (
    <>
      <Header />

      <SearchBar onSearch={setSearchText} />
      <CategoryFilter onFilter={setCategory} />

      <ComplianceCounter
        total={rulesData.length}
        completed={completedCount}
      />

      <RuleList
        rules={filteredRules}
        onCompliant={handleCompliant}
      />

      <Footer />
    </>
  );
}



